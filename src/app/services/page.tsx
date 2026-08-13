import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import CtaBand from "@/components/cta-band";
import { ArrowRight, CheckCircle2, Search, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tile & Stone Services",
  description:
    "From precision tile installation and natural stone to custom mosaics, heated flooring and restoration — explore the full range of services at StoneSet Tile Studio.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Tile & Stone Services",
    description:
      "Precision tile installation, natural stone, custom mosaics, grout & sealing, heated floors and restoration.",
    images: [{ url: "/images/service-tile-installation.jpg" }],
  },
};

const PROCESS = [
  {
    step: "01",
    title: "Consult & Design",
    text: "We listen to your goals, measure your space and recommend materials and layouts that fit your style and budget.",
    icon: Search,
  },
  {
    step: "02",
    title: "Measure & Quote",
    text: "A detailed on-site measure leads to a line-item quote — material, labor, prep and timeline, all in writing.",
    icon: Ruler,
  },
  {
    step: "03",
    title: "Install & Protect",
    text: "Certified installers execute with laser-leveled precision, daily cleanups and dust control from start to finish.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Inspect & Warranty",
    text: "Every job passes a final inspection checklist and is backed by a written 10-year workmanship warranty.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-36 md:pt-44">
        <div className="blob left-[-8%] top-[10%] h-[400px] w-[400px] bg-primary/25" aria-hidden="true" />
        <div className="blob right-[-6%] top-[35%] h-[360px] w-[360px] bg-accent/25" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
              <CheckCircle2 className="h-4 w-4 text-accent" /> Every project, one crew, one warranty
            </span>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Tile &amp; stone services, <span className="text-gradient">done right</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Eight specialized services, one standard: durable, beautiful surfaces installed with
              precision — and guaranteed in writing for ten years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group block h-full overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex items-center gap-2 font-semibold text-primary">
                      <s.icon className="h-5 w-5 text-accent" aria-hidden="true" /> {s.name}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn more{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              How we work
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
              A simple process, done properly
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <StaggerItem key={p.step}>
                <div className="glass-card h-full rounded-3xl p-7">
                  <div className="flex items-center justify-between">
                    <span className="btn-gradient grid h-12 w-12 place-items-center rounded-2xl text-white">
                      <p.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-3xl font-bold text-primary/15">{p.step}</span>
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn delay={0.15} className="mt-12 text-center">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient")}>
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
