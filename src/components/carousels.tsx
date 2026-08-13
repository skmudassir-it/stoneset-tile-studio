"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { PROJECTS, TESTIMONIALS } from "@/lib/site";

function PrevNext({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="embla__buttons mt-8 flex justify-center gap-3">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/60 text-foreground backdrop-blur-xl transition-colors hover:bg-accent hover:text-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/60 text-foreground backdrop-blur-xl transition-colors hover:bg-accent hover:text-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="embla__slide embla__slide--testimonial">
              <figure className="glass-card flex h-full flex-col rounded-3xl p-7">
                <Quote className="h-8 w-8 text-accent/60" aria-hidden="true" />
                <div className="mt-3 flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-primary/10 pt-4">
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.role} · {t.project}
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <PrevNext onPrev={() => emblaApi?.scrollPrev()} onNext={() => emblaApi?.scrollNext()} />
    </div>
  );
}

export function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {PROJECTS.map((p) => (
            <div key={p.slug} className="embla__slide embla__slide--project">
              <article className="glass-card overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {p.category}
                  </p>
                  <h3 className="font-display mt-2 text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <PrevNext onPrev={() => emblaApi?.scrollPrev()} onNext={() => emblaApi?.scrollNext()} />
    </div>
  );
}
