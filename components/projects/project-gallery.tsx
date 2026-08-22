"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryItem = {
  label: string;
  caption: string;
  src?: string;
};

export function ProjectGallery({ items }: { items: GalleryItem[] }) {
  const imageItems = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => Boolean(item.src));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : items[activeIndex];
  const hasImages = imageItems.length > 0;

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => nextImageIndex(items, current, 1));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => nextImageIndex(items, current, -1));
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, items]);

  return (
    <>
      <div className={hasImages ? "grid gap-6" : "grid gap-4 sm:grid-cols-2"}>
        {items.map((item, index) =>
          item.src ? (
            <figure
              key={item.label}
              className="overflow-hidden rounded-lg border border-line bg-bg-elevated"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="block w-full cursor-zoom-in text-left transition-opacity hover:opacity-90"
                aria-label={`放大查看${item.label}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={1600}
                  height={900}
                  className="mx-auto h-auto max-h-[28rem] w-auto max-w-full object-contain"
                />
              </button>
              <figcaption className="border-t border-line px-4 py-3">
                <p className="text-sm font-medium text-fg">{item.label}</p>
                <p className="mt-1 font-mono text-xs text-fg-muted">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ) : (
            <div
              key={item.label}
              className="flex min-h-40 flex-col justify-between rounded-lg border border-line bg-bg-elevated p-5"
            >
              <p className="text-sm font-medium text-fg">{item.label}</p>
              <p className="mt-6 font-mono text-xs text-fg-muted">
                {item.caption}
              </p>
            </div>
          ),
        )}
      </div>

      {active?.src ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 md:p-10"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-md p-2 text-fg transition-colors hover:bg-white/10 hover:text-primary"
            onClick={() => setActiveIndex(null)}
            aria-label="关闭"
          >
            <X className="size-5" />
          </button>

          {imageItems.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-fg transition-colors hover:bg-white/10 hover:text-primary md:left-6"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex((current) =>
                    nextImageIndex(items, current, -1),
                  );
                }}
                aria-label="上一张"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-fg transition-colors hover:bg-white/10 hover:text-primary md:right-6"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex((current) =>
                    nextImageIndex(items, current, 1),
                  );
                }}
                aria-label="下一张"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          ) : null}

          <figure
            className="flex max-h-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.label}
              width={1600}
              height={900}
              className="max-h-[80vh] w-auto max-w-full rounded-md object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-sm font-medium text-fg">{active.label}</p>
              <p className="mt-1 font-mono text-xs text-fg-muted">
                {active.caption}
              </p>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}

function nextImageIndex(
  items: GalleryItem[],
  current: number | null,
  step: 1 | -1,
) {
  const indexes = items
    .map((item, index) => (item.src ? index : -1))
    .filter((index) => index >= 0);

  if (indexes.length === 0 || current === null) {
    return current;
  }

  const position = indexes.indexOf(current);
  const nextPosition = (position + step + indexes.length) % indexes.length;
  return indexes[nextPosition];
}
