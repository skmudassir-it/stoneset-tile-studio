import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { cn } from "@/lib/utils";

export default function CtaBand() {
  return (
    <section className="px-4 py-16 md:py-20">
      <FadeIn className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/cta.jpg"
            alt=""
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-accent/70" />
          <div className="relative px-6 py-16 text-center md:px-16 md:py-20">
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
              Tell us about your space and we will send a detailed, no-obligation quote within 24
              hours — plus a free on-site measure and design consult.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-primary hover:bg-white/90 hover:brightness-100"
                )}
              >
                Get a Free Quote
              </Link>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/60 bg-white/15 text-white backdrop-blur-xl hover:bg-white/25"
                )}
              >
                View Our Work
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/75">
              Call {` `}
              <a href="tel:+15125550147" className="font-medium text-white underline underline-offset-4">
                (512) 555-0147
              </a>{" "}
              or reach us online — we answer within one business day.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
