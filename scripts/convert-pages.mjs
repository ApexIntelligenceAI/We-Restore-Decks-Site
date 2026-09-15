import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const LEGACY = path.join(ROOT, "_legacy");
const OUT = path.join(ROOT, "content", "pages");

const EXCLUDED = new Set(["home-test", "out-process", "blog", "detail_blog-posts"]);

function getSlug(filename) {
  return filename.replace(/\.html$/, "");
}

function extractTitle(html) {
  const match = html.match(/<title>([^<]*)<\/title>/i);
  return match ? match[1].trim() : "We Restore Decks";
}

function extractMetaDescription(html) {
  const match = html.match(
    /<meta\s+name="description"\s+content="([^"]*)"/i
  );
  return match ? match[1].trim() : "";
}

function extractEmbedStyles(html) {
  const styleMatches = html.match(/<style>([\s\S]*?)<\/style>/gi) || [];
  return styleMatches
    .map((block) => block.replace(/<\/?style>/gi, ""))
    .join("\n");
}

function scopeEmbedCss(css) {
  return css
    .replace(/(^|[\s,{>+~])html(\s*\{)/g, "$1.wrd-page-embed$2")
    .replace(/(^|[\s,{>+~])body(\s*\{)/g, "$1.wrd-page-embed$2")
    .replace(/(^|[\n{;])\s*\*\s*\{([^}]*)\}/g, (match, prefix, rules) => {
      const kept = rules
        .replace(/margin\s*:[^;]+;?/gi, "")
        .replace(/padding\s*:[^;]+;?/gi, "")
        .trim();
      if (!kept) return prefix;
      return `${prefix}.wrd-page-embed, .wrd-page-embed * { ${kept} }`;
    });
}

function flattenAllEmbeddedPages(html) {
  return html.replace(
    /<div class="w-embed[^"]*">\s*<!DOCTYPE html>[\s\S]*?<\/html>\s*<\/div>/gi,
    (full) => {
      const headMatch = full.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
      const bodyMatch = full.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      const styles = headMatch ? extractEmbedStyles(headMatch[1]) : "";
      const scoped = styles ? scopeEmbedCss(styles) : "";
      const body = bodyMatch ? bodyMatch[1] : "";
      const styleBlock = scoped ? `<style>${scoped}</style>` : "";
      return `<div class="w-embed wrd-page-embed">${styleBlock}${body}</div>`;
    }
  );
}

function extractBodyContent(html, slug) {
  const headerEnd = html.indexOf("</header>");
  if (headerEnd === -1) throw new Error(`No header found in ${slug}`);

  let content = html.slice(headerEnd + "</header>".length);

  const estimateIdx = content.indexOf('<section id="estimate"');
  const footerIdx = content.indexOf("<footer");

  if (slug === "contact") {
    const sectionEnd = content.indexOf("</section>", estimateIdx);
    content = content.slice(estimateIdx, sectionEnd + "</section>".length);
  } else if (estimateIdx > -1) {
    content = content.slice(0, estimateIdx);
  } else if (footerIdx > -1) {
    content = content.slice(0, footerIdx);
  }

  return flattenAllEmbeddedPages(content.trim());
}

function rewritePaths(html) {
  return html
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="([^"]+)\.html"/g, (_, page) => {
      if (
        page.startsWith("http") ||
        page.startsWith("#") ||
        page.startsWith("tel:") ||
        page.startsWith("mailto:")
      ) {
        return `href="${page}"`;
      }
      return `href="/${page}"`;
    })
    .replace(/src="images\//g, 'src="/images/')
    .replace(/url\("images\//g, 'url("/images/')
    .replace(/url\('images\//g, "url('/images/")
    .replace(/src="css\//g, 'src="/css/')
    .replace(/href="css\//g, 'href="/css/')
    .replace(/src="js\//g, 'src="/js/')
    .replace(/\s(?:crossorigin|integrity)(?:=(?:"[^"]*"|'[^']*'))?/gi, "")
    .replace(/\sdata-wf-[\w-]+(?:=(?:"[^"]*"|'[^']*'))?/gi, "")
    .replace(/\srequired=""/g, " required")
    .replace(/\sdisabled=""/g, " disabled")
    .replace(/\sselected=""/g, " selected")
    .replace(/\sallowfullscreen=""/g, " allowfullscreen")
    .replace(/\sopen=""/g, " open")
    .replace(/style="([^"]*)"/g, (_, styles) => {
      const fixed = styles.replace(/"/g, "'");
      return `style="${fixed}"`;
    });
}

function hasEstimateForm(html) {
  return html.includes('<section id="estimate"');
}

function isContactPage(slug) {
  return slug === "contact";
}

fs.mkdirSync(OUT, { recursive: true });

const manifest = [];

for (const file of fs.readdirSync(LEGACY).filter((f) => f.endsWith(".html"))) {
  const slug = getSlug(file);
  if (EXCLUDED.has(slug)) continue;

  const html = fs.readFileSync(path.join(LEGACY, file), "utf8");
  let content = extractBodyContent(html, slug);
  content = rewritePaths(content);

  const title = extractTitle(html);
  const description = extractMetaDescription(html);

  const meta = {
    slug,
    title,
    description,
    hasEstimateForm: hasEstimateForm(html) && !isContactPage(slug),
    isContactPage: isContactPage(slug),
    route: slug === "index" ? "/" : `/${slug}`,
  };

  fs.writeFileSync(path.join(OUT, `${slug}.html`), content, "utf8");
  manifest.push(meta);
}

fs.writeFileSync(
  path.join(OUT, "manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8"
);

console.log(`Converted ${manifest.length} pages.`);
