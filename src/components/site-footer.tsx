import Image from "next/image";
import Link from "next/link";
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

/** One closing band: invitation, visit facts, and navigation. */
export function SiteFooter() {
  return (
    <footer className="mt-auto bg-secondary text-secondary-foreground">
      <div className="site-wrap py-12 md:py-16">
        <Image
          src="/images/logo.png"
          alt={site.name}
          width={358}
          height={65}
          className="h-9 w-auto brightness-0 invert"
        />

        <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Free initial consultation
            </p>
            <p className="mt-3 font-display text-[clamp(1.85rem,3vw,2.35rem)] leading-[1.15] tracking-tight text-white">
              Talk with counsel who understands your family
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Call or write from downtown San Rafael. We serve clients throughout{" "}
              {site.serviceArea}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0 lg:pb-1">
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              size="lg"
              className="h-12 w-full rounded-md bg-gold px-6 text-base font-semibold text-ink hover:bg-gold/90 sm:w-auto"
            >
              Contact the firm
            </Button>
            <Button
              nativeButton={false}
              render={<a href={site.phoneHref} />}
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-md border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Call {site.phone}
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 text-sm text-white/70 md:mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <address className="not-italic leading-relaxed">
              {site.address.street}, {site.address.suite}, {site.address.city},{" "}
              {site.address.state} {site.address.zip}
            </address>
            <a
              href={site.phoneHref}
              className="font-medium text-white hover:text-white/80"
            >
              {site.phone}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/75 hover:text-white"
            >
              <GoogleMapsIcon className="size-4 text-gold" />
              Get directions
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
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
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/40">
          <p>
            Attorney Advertising. This website is designed for general information
            only. The information presented at this site should not be construed to
            be formal legal advice nor the formation of a lawyer/client
            relationship.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
