import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";

function GoogleMapsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

/** Combined contact CTA + site footer - one navy closing band sitewide. */
export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-secondary text-secondary-foreground">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,150,58,0.22),transparent_50%)]"
        aria-hidden
      />

      <div className="relative site-wrap">
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 md:flex-row md:items-end md:justify-between md:py-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Free initial consultation
            </p>
            <p className="mt-3 font-display text-3xl tracking-tight text-white md:text-4xl">
              Talk with counsel who understands your family
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              Call or write from downtown San Rafael. We serve clients throughout{" "}
              {site.serviceArea}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="/contact" />}
              size="lg"
              className="h-12 rounded-md bg-gold px-6 text-base font-semibold text-ink hover:bg-gold/90"
            >
              Contact the firm
            </Button>
            <Button
              render={<a href={site.phoneHref} />}
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              Call {site.phone}
            </Button>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={358}
              height={65}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Conservatorship, probate, trust administration, and estate planning
              for families in {site.serviceArea}.
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <address className="not-italic">
                {site.address.street}, {site.address.suite}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="text-sm font-medium text-white/85 hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps directions (opens in new tab)"
                  className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white"
                >
                  <GoogleMapsIcon className="size-5" />
                  Get directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-xs leading-relaxed text-white/45">
          <p>
            Attorney Advertising. This website is designed for general information
            only. The information presented at this site should not be construed to
            be formal legal advice nor the formation of a lawyer/client
            relationship.
          </p>
          <p className="mt-3">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
