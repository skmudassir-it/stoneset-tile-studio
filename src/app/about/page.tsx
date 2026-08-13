import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import CtaBand from "@/components/cta-band";
import { Award, HandHeart, Leaf, Medal, Ruler } from "lucide-react";
import { STATS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "StoneSet Tile Studio is a family-run tile and stone installation company serving Greater Austin since 2011 — licensed, insured and obsessed with craftsmanship.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us",
    description: "Family-run tile and stone installation company serving Greater Austin since 2011.",
    images: [{ url: "/images/about.jpg" }],
  },
};

const VALUES = [
  {
    title: "Craft over shortcuts",
    text: "We never rush a cure, hide a substrate problem, or walk away from a lippage. If it is not right, we redo it — on our dime.",
    icon: Medal,
  },
  {
    title: "Respect for your home",
    text: "Drop cloths, daily vacuuming, protected floors and a clean walk-through every evening. Your home is our job site, not our studio.",
    icon: HandHeart,
  },
  {
    title: "Materials that matter",
    text: "We source premium tile, stone and installation systems and we are honest about what is worth paying for — and what is not.",
    icon: Leaf,
  },
  {
    title: "Measured promises",
    text: "Written quotes, written schedules, written warranties. You should never have to take our word for it — it is in the paperwork.",
    icon: Ruler,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-36 md:pt-44">
        <div className="blob left-[-8%] top-[10%] h-[400px] w-[400px] bg-accent/25" aria-hidden="true" />
        <div className="blob right-[-6%] top-[30%] h-[360px] w-[360px] bg-primary/25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
                <Award className="h-4 w-4 text-accent" aria-hidden="true" /> Family-run since 2011
              </span>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-tight md:text-5xl">
                We build surfaces people <span className="text-gradient">touch every day</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                StoneSet Tile Studio started with one van, one trowel and a simple belief: tile is
                not decoration — it is the most touched surface in a home. It deserves to be
                installed like it will last a century. Because it will.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 max-w-xl leading-relaxed text-foreground/80">
                Fifteen years and 850+ projects later, we are still a small, senior-led crew of
                certified installers. No subcontractor roulette, no salespeople — the people who
                quote your job are the people who install it.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <div className="glass overflow-hidden rounded-3xl p-2.5 shadow-2xl shadow-primary/15">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about.jpg"
                  alt="A StoneSet Tile Studio craftsman inspecting a freshly laid mosaic floor"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our values</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
              The standards behind the surface
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="btn-gradient grid h-12 w-12 place-items-center rounded-2xl text-white">
                    <v.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-10">
        <FadeIn className="mx-auto max-w-6xl">
          <div className="glass rounded-3xl px-8 py-10">
            <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {STATS.map((s) => (
                <StaggerItem key={s.label} className="text-center">
                  <p className="text-gradient font-display text-4xl font-bold md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>
      </section>

      <section className="px-4 py-16">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Come see the difference
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            Visit our showroom to touch real samples — or invite us over for a free on-site measure
            and a straight answer about your project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient")}>
              Book a Consultation
            </Link>
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/70 bg-white/60 text-foreground backdrop-blur-xl"
              )}
            >
              See Our Work
            </Link>
          </div>
        </FadeIn>
      </section>

      <CtaBand />
    </>
  );
}
