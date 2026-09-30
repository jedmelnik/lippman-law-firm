import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export function SiteHeader({ variant = "overlay" }: SiteHeaderProps) {
  const isOverlay = variant === "overlay";

  return (
    <header
      className={
        isOverlay
          ? "absolute inset-x-0 top-0 z-20"
          : "sticky top-0 z-20 border-b border-border/70 bg-[#f4f7fa]/92 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <a
          href="/"
          className={
            isOverlay
              ? "font-display text-2xl tracking-[0.04em] text-white transition-opacity hover:opacity-90 md:text-[1.65rem]"
              : "font-display text-2xl tracking-[0.04em] text-ink transition-opacity hover:opacity-80 md:text-[1.65rem]"
          }
        >
          {site.name}
        </a>
        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href={isOverlay ? "#services" : "/#services"}
            className={
              isOverlay
                ? "hidden text-sm font-medium text-white/85 transition-colors hover:text-white sm:inline"
                : "hidden text-sm font-medium text-ink/70 transition-colors hover:text-ink sm:inline"
            }
          >
            Services
          </a>
          <a
            href="/steve-speaks"
            className={
              isOverlay
                ? "hidden text-sm font-medium text-white/85 transition-colors hover:text-white md:inline"
                : "hidden text-sm font-medium text-ink/70 transition-colors hover:text-ink md:inline"
            }
          >
            Steve Speaks
          </a>
          <a
            href={isOverlay ? "#visit" : "/#visit"}
            className={
              isOverlay
                ? "hidden text-sm font-medium text-white/85 transition-colors hover:text-white lg:inline"
                : "hidden text-sm font-medium text-ink/70 transition-colors hover:text-ink lg:inline"
            }
          >
            Visit
          </a>
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
