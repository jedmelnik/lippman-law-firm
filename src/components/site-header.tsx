"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  /** @deprecated Overlay vs solid is now scroll-driven; kept for call-site compat. */
  variant?: "overlay" | "solid";
};

const navLinks = [
  { label: "Services", href: "/services", show: "sm:inline" },
  { label: "Steve Speaks", href: "/steve-speaks", show: "md:inline" },
  { label: "Contact", href: "/contact", show: "lg:inline" },
] as const;

/**
 * Fixed site nav: transparent over the hero at the top, then a solid bar
 * slides into place on scroll so logo + tabs stay available lower down.
 */
export function SiteHeader({ variant = "overlay" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const forceSolid = variant === "solid";
  const solid = forceSolid || scrolled;

  useEffect(() => {
    if (forceSolid) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceSolid]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,transform,border-color] duration-300 ease-out",
        solid
          ? "translate-y-0 border-b border-border/70 bg-[#f4f7fa]/95 shadow-[0_8px_24px_rgba(13,17,22,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8 md:py-5">
        <a
          href="/"
          className={cn(
            "font-display text-2xl tracking-[0.04em] transition-colors md:text-[1.65rem]",
            solid
              ? "text-ink hover:opacity-80"
              : "text-white hover:opacity-90",
          )}
        >
          {site.name}
        </a>
        <nav className="flex items-center gap-2 sm:gap-4" aria-label="Primary">
          {navLinks.map(({ label, href, show }) => (
            <a
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors",
                // Sticky bar keeps tabs available; overlay still hides some on small screens
                solid ? "inline" : `hidden ${show}`,
                solid
                  ? "text-ink/70 hover:text-ink"
                  : "text-white/85 hover:text-white",
              )}
            >
              {label}
            </a>
          ))}
          <Button
            render={<a href={site.phoneHref} />}
            size="lg"
            className="h-10 rounded-md bg-brand px-4 text-sm font-semibold text-brand-foreground shadow-none hover:bg-brand/90"
          >
            Call {site.phone}
          </Button>
        </nav>
      </div>
    </header>
  );
}
