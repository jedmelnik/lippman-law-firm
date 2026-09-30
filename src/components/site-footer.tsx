import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-[#f4f7fa]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-xl tracking-wide text-ink">
          <a href="/" className="transition-opacity hover:opacity-80">
            {site.name}
          </a>
        </p>
        <p className="max-w-md leading-relaxed">
          {site.tagline}. {site.address.full}.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/steve-speaks"
            className="font-medium text-ink underline-offset-4 hover:underline"
          >
            Steve Speaks
          </a>
          <a
            href={site.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-ink underline-offset-4 hover:underline"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
