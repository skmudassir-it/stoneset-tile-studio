"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "glass mx-auto max-w-6xl rounded-full transition-all duration-300",
          scrolled && "glass-strong shadow-lg shadow-primary/10"
        )}
      >
        <nav aria-label="Main" className="flex items-center justify-between gap-4 px-5 py-2.5">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="btn-gradient grid h-9 w-9 shrink-0 place-items-center rounded-full text-white">
              <i className="fa-solid fa-gem" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold leading-tight text-foreground">
              StoneSet <span className="text-accent">Tile Studio</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  pathname === l.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "btn-gradient")}>
              Get a Free Quote
            </Link>
          </div>

          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/60 text-foreground backdrop-blur-xl transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent className="glass w-80 border-white/60">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation for StoneSet Tile Studio
              </SheetDescription>
              <div className="flex flex-col gap-2 pt-12">
                {LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-current={pathname === l.href ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-2xl px-4 py-2.5 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      pathname === l.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link href="/contact" className={cn(buttonVariants(), "btn-gradient mt-3")}>
                  Get a Free Quote
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
