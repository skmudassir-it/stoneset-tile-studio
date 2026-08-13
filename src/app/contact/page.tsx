import type { Metadata } from "next";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import QuoteForm from "@/components/quote-form";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Quotes",
  description:
    "Request a free, no-obligation quote from StoneSet Tile Studio. Free on-site measures, replies within one business day, and a 10-year workmanship warranty on every installation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Free Quotes",
    description: "Request a free quote — we reply within one business day.",
    images: [{ url: "/images/cta.jpg" }],
  },
};

const CARDS = [
  {
    title: "Call or text",
    lines: [SITE.phone, "Mon–Fri, 8 AM – 6 PM"],
    href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
  },
  {
    title: "Email us",
    lines: [SITE.email, "Replies within one business day"],
    href: `mailto:${SITE.email}`,
    icon: Mail,
  },
  {
    title: "Visit the showroom",
    lines: [`${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region}`],
    href: "#showroom",
    icon: MapPin,
  },
  {
    title: "Hours",
    lines: ["Monday – Friday", "8:00 AM – 6:00 PM"],
    href: "#hours",
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-36 md:pt-44">
        <div className="blob left-[-8%] top-[10%] h-[400px] w-[400px] bg-primary/25" aria-hidden="true" />
        <div className="blob right-[-6%] top-[30%] h-[360px] w-[360px] bg-accent/25" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Let’s plan your <span className="text-gradient">next project</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Tell us about your space and we will reply within one business day with a
              no-obligation quote and a free on-site measure.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((c) => (
              <StaggerItem key={c.title} className="h-full">
                <a
                  href={c.href}
                  className="glass-card block h-full rounded-3xl p-6"
                  aria-label={`${c.title}: ${c.lines.join(", ")}`}
                >
                  <span className="btn-gradient grid h-11 w-11 place-items-center rounded-2xl text-white">
                    <c.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-display mt-4 text-base font-semibold">{c.title}</h2>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1 text-sm text-muted">
                      {l}
                    </p>
                  ))}
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div className="glass rounded-3xl p-7 md:p-9">
              <h2 className="font-display text-2xl font-semibold">Request your free quote</h2>
              <p className="mt-2 text-sm text-muted">
                Fields marked with an asterisk are required. Your details are only used to prepare
                your quote.
              </p>
              <QuoteForm className="mt-7" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="glass-card h-full rounded-3xl p-7 md:p-9">
              <h2 className="font-display text-xl font-semibold">What happens next</h2>
              <ol className="mt-5 space-y-5">
                {[
                  ["We read your request", "A senior estimator reviews your project details within one business day."],
                  ["We call you", "A quick conversation to understand the space, style and timeline."],
                  ["Free on-site measure", "20 minutes, and you get a detailed line-item quote — in writing."],
                  ["We install & guarantee", "Your project, installed by our senior crew, backed for 10 years."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="btn-gradient grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{t}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-5">
                <p className="text-sm leading-relaxed text-foreground/85">
                  <strong className="font-semibold">Currently booking:</strong> projects starting
                  next month. Lock your date with a fully refundable deposit.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
