"use client";

import { useRef, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgawklan";
const MAX_PHOTOS = 10;

type EstimateFormProps = {
  variant?: "default" | "contact";
};

export const EstimateForm = ({ variant = "default" }: EstimateFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const syncInputFiles = (nextFiles: File[]) => {
    if (!fileInputRef.current) return;
    const dataTransfer = new DataTransfer();
    nextFiles.forEach((file) => dataTransfer.items.add(file));
    fileInputRef.current.files = dataTransfer.files;
  };

  const handleAddFiles = (incoming: FileList | File[]) => {
    const next = [...files];
    const list = Array.from(incoming);

    for (const file of list) {
      if (next.length >= MAX_PHOTOS) break;
      if (!file.type.startsWith("image/")) continue;
      if (next.some((item) => item.name === file.name && item.size === file.size)) {
        continue;
      }
      next.push(file);
    }

    setFiles(next);
    syncInputFiles(next);
  };

  const handleDropzoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleDropzoneKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleDropzoneClick();
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.borderColor = "#B76F3F";
    event.currentTarget.style.backgroundColor = "#faf6f2";
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.borderColor = "";
    event.currentTarget.style.backgroundColor = "";
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.borderColor = "";
    event.currentTarget.style.backgroundColor = "";
    if (event.dataTransfer.files.length) {
      handleAddFiles(event.dataTransfer.files);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      handleAddFiles(event.target.files);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setFiles([]);
        syncInputFiles([]);
        window.location.href = "/thanks";
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const sectionClass =
    variant === "contact" ? "wrd-cta-1 contact-page" : "wrd-cta-1";
  const formWrapperClass =
    variant === "contact"
      ? "wrd-cta-form cta-form-contact w-form"
      : "wrd-cta-form wrd-cta-form-new w-form";

  return (
    <section id="estimate" className={sectionClass}>
      <div className="wrd-container wrd-cta-grid">
        <div>
          <p
            className={`wrd-eyebrow wrd-eyebrow-light${variant === "contact" ? " cta-eyebrow-contact" : ""}`}
          >
            Start with a consultation
          </p>
          <h2
            className={`wrd-section-title wrd-title-light wrd-cta-title${variant === "contact" ? " cta-title-contact" : ""}`}
          >
            Ready to bring the deck back?
          </h2>
          <p className={`wrd-cta-sub-1${variant === "contact" ? " cta-sub-contact" : ""}`}>
            Call the team or send the project basics. We&apos;ll review your details and
            follow up with next steps.
          </p>
          <a
            href="tel:4102636270"
            className={`wrd-cta-phone-1${variant === "contact" ? " cta-phone-contact" : ""}`}
          >
            410-263-6270
          </a>
        </div>

        <div>
          <div className={formWrapperClass}>
            {status === "success" && (
              <div className="w-form-done" style={{ display: "block" }}>
                <div>Thank you! Your submission has been received!</div>
              </div>
            )}
            {status === "error" && (
              <div className="w-form-fail" style={{ display: "block" }}>
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            )}

            <form
              encType="multipart/form-data"
              action={FORMSPREE_ENDPOINT}
              method="post"
              onSubmit={handleSubmit}
              style={{ display: status === "success" ? "none" : "block" }}
            >
              <input type="hidden" name="_next" value="/thanks" />

              <div className="wrd-form-row">
                <div className="wrd-form-field">
                  <label htmlFor="first_name" className="wrd-form-label">First Name</label>
                  <input
                    className="wrd-input w-input"
                    maxLength={256}
                    name="first_name"
                    placeholder="Example text"
                    type="text"
                    id="first_name"
                    required
                  />
                </div>
                <div className="wrd-form-field">
                  <label htmlFor="last_name" className="wrd-form-label">Last Name</label>
                  <input
                    className="wrd-input w-input"
                    maxLength={256}
                    name="last_name"
                    placeholder="Example text"
                    type="text"
                    id="last_name"
                    required
                  />
                </div>
              </div>

              <div className="wrd-form-row">
                <div className="wrd-form-field">
                  <label htmlFor="email" className="wrd-form-label">Email</label>
                  <input
                    className="wrd-input w-input"
                    maxLength={256}
                    name="email"
                    placeholder="Example text"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div className="wrd-form-field">
                  <label htmlFor="phone" className="wrd-form-label">Phone</label>
                  <input
                    className="wrd-input w-input"
                    maxLength={256}
                    name="phone"
                    placeholder="Example text"
                    type="tel"
                    id="phone"
                    required
                  />
                </div>
              </div>

              <div className="wrd-form-field">
                <label htmlFor="street_address" className="wrd-form-label">
                  Street Address
                </label>
                <input
                  className="wrd-input w-input"
                  maxLength={256}
                  name="street_address"
                  placeholder="Example text"
                  type="text"
                  id="street_address"
                  required
                />
              </div>

              <div className="wrd-form-row">
                <div className="wrd-form-field">
                  <label htmlFor="city" className="wrd-form-label">City</label>
                  <input
                    className="wrd-input w-input"
                    maxLength={256}
                    name="city"
                    placeholder="Example text"
                    type="text"
                    id="city"
                    required
                  />
                </div>
                <div className="wrd-form-field">
                  <label htmlFor="zip" className="wrd-form-label">Zip</label>
                  <input
                    className="wrd-input w-input"
                    maxLength={256}
                    name="zip"
                    placeholder="Example text"
                    type="text"
                    id="zip"
                    required
                  />
                </div>
              </div>

              <div
                className={`wrd-form-field${variant === "contact" ? " wrd-field-deck" : ""}`}
              >
                <label htmlFor="deck_size" className="wrd-form-label">Deck Size</label>
                <select
                  name="deck_size"
                  id="deck_size"
                  required
                  className="wrd-input wrd-select"
                  defaultValue=""
                >
                  <option value="" disabled>—Please choose an option—</option>
                  <option value="Small (10×10)">Small (10×10)</option>
                  <option value="Med (15×20)">Med (15×20)</option>
                  <option value="Large (20×30 or more)">Large (20×30 or more)</option>
                </select>
              </div>

              <div className="wrd-form-field">
                <label htmlFor="description" className="wrd-form-label">Description</label>
                <textarea
                  className="wrd-input wrd-textarea w-input"
                  maxLength={5000}
                  name="description"
                  placeholder="Tell us about your deck and what you would like done."
                  rows={5}
                  id="description"
                  required
                />
              </div>

              <div
                className={`wrd-form-field${variant === "contact" ? " wrd-field-ref" : ""}`}
              >
                <label htmlFor="referral_source" className="wrd-form-label">
                  How did you find us?
                </label>
                <select
                  name="referral_source"
                  id="referral_source"
                  required
                  className="wrd-input wrd-select"
                  defaultValue=""
                >
                  <option value="" disabled>—Please choose an option—</option>
                  <option value="Google/Search">Google/Search</option>
                  <option value="Post Card">Post Card</option>
                  <option value="Sign (RT 50)">Sign (RT 50)</option>
                  <option value="Next Door">Next Door</option>
                  <option value="What's Up Magazine">What&apos;s Up Magazine</option>
                  <option value="Angie's List">Angie&apos;s List</option>
                  <option value="Home Advisor">Home Advisor</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Neighbor">Neighbor</option>
                  <option value="A Friend or Relative">A Friend or Relative</option>
                </select>
              </div>

              <p className="wrd-upload-note">
                <strong>If you have photos, please upload them below</strong> as they are
                very helpful in providing a quality estimate!
              </p>

              <div className="wrd-form-field">
                <div
                  className="wrd-dropzone"
                  role="button"
                  tabIndex={0}
                  aria-label="Upload photos"
                  onClick={handleDropzoneClick}
                  onKeyDown={handleDropzoneKeyDown}
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="wrd-dropzone-main">Drag &amp; Drop Files Here</div>
                  <div className="wrd-dropzone-or">or</div>
                  <div className="wrd-dropzone-browse">Browse Files</div>
                  <div className="wrd-dropzone-files">
                    {files.map((file) => (
                      <div key={`${file.name}-${file.size}`}>• {file.name}</div>
                    ))}
                  </div>
                  <div className="wrd-dropzone-count">
                    {files.length} of {MAX_PHOTOS}
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  className="wrd-file-hidden w-input"
                  accept="image/*"
                  name="photos"
                  type="file"
                  id="photos"
                  multiple
                  onChange={handleFileChange}
                />
              </div>

              <input
                type="submit"
                data-wait="Please wait..."
                className="wrd-btn wrd-btn-gold w-button"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
