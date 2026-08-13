import Link from "next/link";
import { SITE, SERVICES } from "@/lib/site";

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram", icon: "fa-brands fa-instagram" },
  { href: "https://facebook.com", label: "Facebook", icon: "fa-brands fa-facebook-f" },
  { href: "https://pinterest.com", label: "Pinterest", icon: "fa-brands fa-pinterest-p" },
  { href: "https://youtube.com", label: "YouTube", icon: "fa-brands fa-youtube" },
];

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-4 pb-6 pt-12">
      <div className="glass mx-auto max-w-6xl rounded-3xl p-8 md:p-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="btn-gradient grid h-10 w-10 place-items-center rounded-full text-white">
                <i className="fa-solid fa-gem" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold text-foreground">
                StoneSet <span className="text-accent">Tile Studio</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Crafting durable, beautiful surfaces — ceramic, porcelain, marble and natural stone
              for kitchens, baths and beyond. Licensed, insured and backed by a 10-year
              workmanship warranty.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/50 text-foreground/70 transition-colors hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <i className={s.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} className="hover:text-accent">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                  {SITE.email}
                </a>
              </li>
              <li>
                {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
                {SITE.address.postalCode}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-primary/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>
            {SITE.license} · Fully insured ($2M liability)
          </p>
        </div>
      </div>
    </footer>
  );
}
