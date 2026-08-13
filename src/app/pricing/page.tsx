import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import CtaBand from "@/components/cta-band";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BadgeCheck, Calculator, FileCheck2, HandCoins } from "lucide-react";
import { FAQS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing & Investment",
  description:
    "Transparent pricing for tile and stone installation: per-square-foot labor ranges, what affects your quote, and financing-friendly payment milestones.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Investment",
    description: "Transparent, line-item pricing for tile and stone installation.",
    images: [{ url: "/images/og.jpg" }],
  },
};

const TIERS = [
  {
    name: "Floors & Walls",
    price: "$8–$14",
    unit: "per sq ft installed",
    note: "Standard ceramic, porcelain and large-format tile on prepared, level substrates.",
    features: ["Substrate prep included", "Laser-leveled layout", "Standard grout included", "10-year warranty"],
    highlight: false,
  },
  {
    name: "Natural Stone & Mosaics",
    price: "$14–$22",
    unit: "per sq ft installed",
    note: "Marble, travertine, limestone, granite and custom mosaic work with premium materials.",
    features: ["Book-matching & blending", "Stone-safe adhesives & sealers", "Custom pattern layout", "Enhanced detailing"],
    highlight: true,
  },
  {
    name: "Restoration & Specialty",
    price: "Quote",
    unit: "after site review",
    note: "Repairs, re-grouting, sealing, radiant heat and commercial programs are quoted per project.",
    features: ["Free on-site diagnosis", "Written line-item proposal", "Color-matching services", "Priority scheduling"],
    highlight: false,
  },
];

const FACTORS = [
  "Tile size and format — large format and small mosaics both take more time and skill",
  "Pattern complexity — herringbone, chevron, borders and inlays add layout time",
  "Substrate condition — leveling, waterproofing and old-adhesive removal affect prep",
  "Demolition and disposal of existing tile",
  "Access — second floors, tight hallways and building logistics",
  "Premium materials like natural stone, glass and specialty grouts",
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-36 md:pt-44">
        <div className="blob left-[-8%] top-[10%] h-[400px] w-[400px] bg-primary/25" aria-hidden="true" />
        <div className="blob right-[-6%] top-[30%] h-[360px] w-[360px] bg-accent/25" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
              <Calculator className="h-4 w-4 text-accent" aria-hidden="true" /> Honest, line-item pricing
            </span>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              What a project <span className="text-gradient">really costs</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              No per-square-foot fairy tales. Your quote itemizes materials, labor, prep and
              timeline — and it will not change unless you change the scope.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {TIERS.map((t) => (
              <StaggerItem key={t.name} className="h-full">
                <div
                  className={cn(
                    "glass-card relative flex h-full flex-col rounded-3xl p-8",
                    t.highlight && "ring-2 ring-accent/60"
                  )}
                >
                  {t.highlight && (
                    <span className="btn-gradient absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                  <p className="mt-4">
                    <span className="text-gradient font-display text-4xl font-bold">{t.price}</span>
                    <span className="ml-2 text-sm text-muted">{t.unit}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t.note}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ className: "mt-8 w-full" }), "btn-gradient")}
                  >
                    Get My Quote
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="glass-card h-full rounded-3xl p-8">
              <span className="btn-gradient grid h-12 w-12 place-items-center rounded-2xl text-white">
                <FileCheck2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="font-display mt-5 text-2xl font-semibold">What affects your quote</h2>
              <ul className="mt-5 space-y-3">
                {FACTORS.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                The fastest way to an accurate number? A 20-minute on-site measure. It is free, and
                you will know your exact budget before we write a single line of the quote.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass-card h-full rounded-3xl p-8">
              <span className="btn-gradient grid h-12 w-12 place-items-center rounded-2xl text-white">
                <HandCoins className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="font-display mt-5 text-2xl font-semibold">How payment works</h2>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/85">
                <li className="flex items-start gap-2.5">
                  <span className="btn-gradient mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold">1</span>
                  <span><strong className="font-semibold">Deposit</strong> — 30% to lock your date and order materials.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="btn-gradient mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold">2</span>
                  <span><strong className="font-semibold">Milestones</strong> — progress payments tied to completed, inspected phases.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="btn-gradient mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold">3</span>
                  <span><strong className="font-semibold">Final payment</strong> — due only after your final walk-through passes.</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted">
                Financing available on projects over $5,000 through our preferred partners.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">FAQ</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
              Pricing questions, answered
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <Accordion defaultValue={["faq-0"]} className="space-y-3">
              {FAQS.slice(0, 5).map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="glass-card rounded-2xl px-5">
                  <AccordionTrigger className="text-left text-base font-medium">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-10 text-center">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient")}>
              Get an Exact Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
