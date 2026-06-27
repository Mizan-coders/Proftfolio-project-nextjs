"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Expand, X } from "lucide-react";

/**
 * Case-study screenshot: shows a cropped 16:9 preview, and opens the full
 * (tall) screenshot in a scrollable lightbox on click. The full-size <img>
 * is only mounted when the lightbox is open, so it loads on demand.
 */
export function ProjectScreenshot({ src, name }: { src: string; name: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View full ${name} screenshot`}
        className="group/shot relative block aspect-video w-full cursor-zoom-in overflow-hidden border-b border-border bg-muted"
      >
        <Image
          src={src}
          alt={`${name} screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover/shot:bg-black/40 group-hover/shot:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground">
            <Expand className="size-3.5" />
            View full screenshot
          </span>
        </span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} full screenshot`}
          className="fixed inset-0 z-100 flex justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="fixed right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background"
          >
            <X className="size-5" />
          </button>
          {/* Full-size screenshot, mounted only when open so it loads on demand. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${name} full screenshot`}
            onClick={(e) => e.stopPropagation()}
            className="h-fit w-full max-w-3xl cursor-default rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
