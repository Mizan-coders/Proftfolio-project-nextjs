"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading, Hl } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { cn } from "@/lib/utils";
import { reviews, reviewTags } from "@/lib/reviews";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    onSelect();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-360 px-6 py-20 lg:py-28">
        <SectionHeading
          label="Social Proof"
          title={
            <>
              What Clients Say About the <Hl>Delivery Experience</Hl>
            </>
          }
          subtitle="Feedback focused on communication, speed, professionalism, and execution."
        />

        {/* Highlight cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {reviewTags.map((tag) => (
            <div
              key={tag.title}
              className="rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-primary/30"
            >
              <p className="text-lg font-bold text-primary">{tag.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{tag.sub}</p>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === selected
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
