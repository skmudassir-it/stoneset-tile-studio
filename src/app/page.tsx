import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { TestimonialCarousel } from "@/components/carousels";
import CtaBand from "@/components/cta-band";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { FAQS, FEATURES, SERVICES, SITE, STATS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tile & Stone Installation in Austin, TX",
  description:
    "StoneSet Tile Studio installs ceramic, porcelain, marble and natural stone tile for kitchens, baths, floors and walls — laser-leveled precision, free quotes and a 10-year workmanship warranty.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tile & Stone Installation in Austin, TX | StoneSet Tile Studio",
    description:
      "Crafting durable, beautiful surfaces — ceramic, porcelain, marble and natural stone for kitchens, baths and beyond.",
    images: [{ url: "/images/og.jpg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: `${SITE.url}/images/og.jpg`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  openingHours: "Mo-Fr 08:00-18:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "320",
  },
  sameAs: [
    "https://instagram.com",
    "https://facebook.com",
    "https://pinterest.com",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden px-4 pb-20 pt-36 md:pt-44">
        <div className="blob left-[-10%] top-[5%] h-[420px] w-[420px] bg-primary/25" aria-hidden="true" />
        <div className="blob right-[-8%] top-[30%] h-[380px] w-[380px] bg-accent/25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <FadeIn>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
                <BadgeCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                Licensed &amp; insured · Serving Greater Austin since 2011
              </span>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Beautiful tile &amp; stone, <span className="text-gradient">built to last</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                StoneSet Tile Studio installs ceramic, porcelain, marble and natural stone for
                kitchens, baths, floors and walls — with laser-leveled precision and a 10-year
                workmanship warranty on every project.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient")}>
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white/70 bg-white/60 text-foreground backdrop-blur-xl"
                  )}
                >
                  View Our Projects
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <span className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </span>
                  <strong className="font-semibold text-foreground">4.9</strong> · 320+ reviews
                </span>
                <span>850+ projects completed</span>
                <span>10-year warranty</span>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <div className="glass relative overflow-hidden rounded-3xl p-2.5 shadow-2xl shadow-primary/15">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Luxury bathroom with large-format porcelain tile installed by StoneSet Tile Studio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="glass-strong absolute -bottom-4 left-6 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg">
                <span className="btn-gradient grid h-10 w-10 place-items-center rounded-full text-white">
                  <i className="fa-solid fa-shield-halved" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">10-Year Warranty</p>
                  <p className="text-xs text-muted">On every installation</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------- Feature grid ---------- */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why StoneSet
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-foreground md:text-4xl">
              Craftsmanship you can feel, service you can trust
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="btn-gradient grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg shadow-accent/20">
                    <f.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- Stats strip ---------- */}
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

      {/* ---------- Services grid ---------- */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our services
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-foreground md:text-4xl">
                Everything tile &amp; stone, under one roof
              </h2>
            </div>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline" }), "border-white/70 bg-white/60 backdrop-blur-xl")}
            >
              All services <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <StaggerItem key={s.slug} className="h-full">
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
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Client stories
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-foreground md:text-4xl">
              Trusted by homeowners across Austin
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-12">
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">FAQ</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-foreground md:text-4xl">
              Questions, answered
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <Accordion defaultValue={["faq-0"]} className="space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="glass-card rounded-2xl px-5">
                  <AccordionTrigger className="text-base font-medium text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 leading-relaxed text-muted">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
