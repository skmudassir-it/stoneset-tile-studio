import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import CtaBand from "@/components/cta-band";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${SITE.name}`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-36 md:pt-44">
        <div className="blob left-[-8%] top-[8%] h-[380px] w-[380px] bg-primary/25" aria-hidden="true" />
        <div className="blob right-[-6%] top-[30%] h-[340px] w-[340px] bg-accent/25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <Link
                href="/services"
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary"
              >
                <ArrowRight className="h-3.5 w-3.5 rotate-180" /> All services
              </Link>
            </FadeIn>
            <FadeIn delay={0.05}>
              <span className="btn-gradient mt-6 inline-grid h-12 w-12 place-items-center rounded-2xl text-white">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h1 className="font-display mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {service.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{service.tagline}</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient")}>
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white/70 bg-white/60 text-foreground backdrop-blur-xl"
                  )}
                >
                  See Similar Projects
                </Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <div className="glass overflow-hidden rounded-3xl p-2.5 shadow-2xl shadow-primary/15">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.name}
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
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold md:text-3xl">What we do</h2>
            </FadeIn>
            {service.long.map((p, i) => (
              <FadeIn key={i} delay={0.05 * (i + 1)}>
                <p className="mt-5 leading-relaxed text-foreground/80">{p}</p>
              </FadeIn>
            ))}
            <FadeIn delay={0.2}>
              <p className="mt-6 text-sm font-medium text-primary">
                Every project includes our written 10-year workmanship warranty.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-2">
            <FadeIn delay={0.1}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="font-display text-lg font-semibold">What’s included</h3>
                <ul className="mt-4 space-y-3">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ className: "mt-6 w-full" }), "btn-gradient")}
                >
                  Request a Quote
                </Link>
                <p className="mt-3 text-center text-xs text-muted">
                  Free on-site measure · Reply within 24 hours
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="text-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Related services</h2>
          </FadeIn>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <StaggerItem key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="glass-card group block h-full rounded-3xl p-6"
                >
                  <r.icon className="h-7 w-7 text-accent" aria-hidden="true" />
                  <h3 className="font-display mt-4 text-lg font-semibold">{r.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{r.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
