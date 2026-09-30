import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <a
          href="#top"
          className="font-display text-2xl tracking-[0.04em] text-white transition-opacity hover:opacity-90 md:text-[1.65rem]"
        >
          {site.name}
        </a>
        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="#services"
            className="hidden text-sm font-medium text-white/85 transition-colors hover:text-white sm:inline"
          >
            Services
          </a>
          <a
            href="#visit"
            className="hidden text-sm font-medium text-white/85 transition-colors hover:text-white md:inline"
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
