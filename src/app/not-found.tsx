import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden px-4 pb-20 pt-36">
      <div className="blob left-[10%] top-[10%] h-[360px] w-[360px] bg-accent/20" aria-hidden="true" />
      <div className="blob bottom-[5%] right-[5%] h-[320px] w-[320px] bg-primary/20" aria-hidden="true" />
      <FadeIn className="relative mx-auto max-w-2xl text-center">
        <span className="glass mx-auto grid h-20 w-20 place-items-center rounded-3xl">
          <Compass className="h-9 w-9 text-accent" aria-hidden="true" />
        </span>
        <p className="text-gradient font-display mt-6 text-6xl font-bold md:text-7xl">404</p>
        <h1 className="font-display mt-4 text-3xl font-semibold text-foreground">
          This tile does not exist
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          The page you are looking for was moved, renamed, or never installed. Let us guide you
          back to solid ground.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }), "btn-gradient")}>
            Back to Home
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/70 bg-white/60 text-foreground backdrop-blur-xl"
            )}
          >
            Explore Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
