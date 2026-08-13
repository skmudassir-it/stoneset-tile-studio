import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { ProjectCarousel } from "@/components/carousels";
import CtaBand from "@/components/cta-band";
import { MapPin, Ruler, Clock, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Real projects, real results: spa bathrooms, marble entries, heated floors and custom mosaics installed by StoneSet Tile Studio across Greater Austin.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects & Case Studies",
    description: "Real projects, real results from StoneSet Tile Studio across Greater Austin.",
    images: [{ url: "/images/project-1.jpg" }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-36 md:pt-44">
        <div className="blob left-[-8%] top-[10%] h-[400px] w-[400px] bg-primary/25" aria-hidden="true" />
        <div className="blob right-[-6%] top-[30%] h-[360px] w-[360px] bg-accent/25" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" /> Greater Austin &amp; Central Texas
            </span>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Projects that <span className="text-gradient">speak for themselves</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              A few recent case studies from our portfolio — each one measured, planned, installed
              and inspected by our senior crew.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <ProjectCarousel />
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Case studies
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
              The details behind the work
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.slug} delay={0.08 * i}>
                <article className="glass-card h-full overflow-hidden rounded-3xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* image rendered in carousel above; card keeps description focus */}
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {p.category}
                    </p>
                    <h3 className="font-display mt-2 text-xl font-semibold">{p.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {p.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Ruler className="h-3.5 w-3.5" /> {p.size}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {p.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{p.description}</p>
                    <ul className="mt-4 space-y-2">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-foreground/80">
                          <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1} className="mt-12 text-center">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient")}>
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
