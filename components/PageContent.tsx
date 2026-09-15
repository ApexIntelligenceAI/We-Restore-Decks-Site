"use client";

import { useEffect } from "react";

type PageContentProps = {
  html: string;
  initAccordions?: boolean;
  initSlider?: boolean;
};

const initAccordions = () => {
  const items = document.querySelectorAll(".wr2-faq-item, .faq-item");
  items.forEach((item) => {
    const question = item.querySelector(".wr2-faq-q, .faq-q");
    if (!question || question.getAttribute("data-accordion-init") === "true") return;
    question.setAttribute("data-accordion-init", "true");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      items.forEach((other) => other.classList.remove("is-open"));
      if (!isOpen) item.classList.add("is-open");
    });
  });
};

const initHeroSlider = () => {
  const slider = document.querySelector(".wrd-native-slider");
  if (!slider || slider.getAttribute("data-slider-init") === "true") return;
  slider.setAttribute("data-slider-init", "true");

  const slides = Array.from(
    slider.querySelectorAll<HTMLElement>(".w-slide")
  );
  const nav = slider.parentElement?.querySelector(".wrd-hero-nav");
  if (!slides.length || !nav) return;

  let current = 0;
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? "block" : "none";
  });

  const dots: HTMLButtonElement[] = [];
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `wrd-hero-dot${index === 0 ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => {
      current = index;
      slides.forEach((slide, slideIndex) => {
        slide.style.display = slideIndex === current ? "block" : "none";
      });
      dots.forEach((button, dotIndex) => {
        button.classList.toggle("is-active", dotIndex === current);
      });
    });
    nav.appendChild(dot);
    dots.push(dot);
  });
};

export const PageContent = ({
  html,
  initAccordions: shouldInitAccordions = false,
  initSlider = false,
}: PageContentProps) => {
  useEffect(() => {
    if (shouldInitAccordions) initAccordions();
    if (initSlider) initHeroSlider();
  }, [html, shouldInitAccordions, initSlider]);

  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />
  );
};
