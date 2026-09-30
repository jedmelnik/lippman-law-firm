"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  /** @deprecated Overlay vs solid is now scroll-driven; kept for call-site compat. */
  variant?: "overlay" | "solid";
};

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Steve Speaks", href: "/steve-speaks" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Fixed site nav: transparent over the hero at the top, then a solid bar
 * on scroll. Mobile uses a hamburger dropdown for the primary links.
 */
export function SiteHeader({ variant = "overlay" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const forceSolid = variant === "solid";
  const solid = forceSolid || scrolled || menuOpen;

  useEffect(() => {
    if (forceSolid) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceSolid]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        solid
          ? "border-b border-border/70 bg-[#f4f7fa]/95 shadow-[0_8px_24px_rgba(13,17,22,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:gap-4 md:px-8 md:py-5">
        <a
          href="/"
          className={cn(
            "font-display text-[1.35rem] tracking-[0.04em] transition-colors sm:text-2xl md:text-[1.65rem]",
            solid
              ? "text-ink hover:opacity-80"
              : "text-white hover:opacity-90",
          )}
          onClick={() => setMenuOpen(false)}
        >
          {site.name}
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            className="hidden items-center gap-4 md:flex"
            aria-label="Primary"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  solid
                    ? "text-ink/70 hover:text-ink"
                    : "text-white/85 hover:text-white",
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          <Button
            render={<a href={site.phoneHref} />}
            size="lg"
            className="h-10 rounded-md bg-brand px-3 text-sm font-semibold text-brand-foreground shadow-none hover:bg-brand/90 sm:px-4"
          >
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">Call {site.phone}</span>
          </Button>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-md border md:hidden",
              solid
                ? "border-ink/15 bg-white/80 text-ink hover:bg-white"
                : "border-white/30 bg-white/10 text-white hover:bg-white/20",
            )}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!menuOpen}
        className={cn(
          "border-t border-border/70 bg-[#f4f7fa] md:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2" aria-label="Mobile">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="border-b border-border/60 py-3.5 text-base font-medium text-ink last:border-b-0 hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="my-3 inline-flex h-11 items-center justify-center rounded-md bg-brand px-4 text-sm font-semibold text-brand-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Call {site.phone}
          </a>
        </nav>
      </div>

      {menuOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="absolute left-0 right-0 top-full h-screen bg-ink/45 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
}
