import { Mail } from "lucide-react";
import { site } from "@/lib/site";

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.75 15.5v-7l6.5 3.5-6.5 3.5Z" />
    </svg>
  );
}

function YelpIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12.1 13.7c-.3.3-.2.9.2 1.2l5 3.2c.6.4 1.4-.2 1.2-.9l-1.4-5.8c-.1-.5-.7-.7-1.1-.3l-3.9 2.6Zm-1.4-.4c.4-.2.5-.8.1-1.1L6.2 8.3c-.5-.4-1.3.1-1.2.8l1.3 6c.1.5.7.7 1.1.3l3.3-2.1Zm.5-1.8c.3.3.9.2 1.1-.2l2.5-5.4c.3-.7-.4-1.3-1-.9L8.6 7.5c-.5.3-.4 1 .1 1.2l2.5 1.8Zm-.2 3.6c-.1-.4-.7-.6-1-.2L5.8 18c-.5.5 0 1.3.7 1.1l5.7-1.7c.5-.2.6-.8.2-1.1l-1.4-1.2Zm2.2-1.1c.4-.1.7.3.6.7l-1.8 5.7c-.2.7.6 1.2 1.1.7l4.2-4.3c.4-.4.1-1.1-.4-1.1l-3.7.3Z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Yelp",
    href: site.yelpUrl,
    external: true,
    Icon: YelpIcon,
  },
  {
    name: "YouTube",
    href: site.youtubeUrl,
    external: true,
    Icon: YouTubeIcon,
  },
  {
    name: "Email",
    href: site.emailHref,
    external: false,
    Icon: Mail,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-[#f4f7fa]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-2">
          <p className="font-display text-xl tracking-wide text-ink">
            <a href="/" className="transition-opacity hover:opacity-80">
              {site.name}
            </a>
          </p>
          <p className="max-w-md leading-relaxed">
            {site.tagline}. {site.address.full}.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="font-medium text-ink underline-offset-4 hover:underline"
            >
              Contact
            </a>
            <a
              href="/steve-speaks"
              className="font-medium text-ink underline-offset-4 hover:underline"
            >
              Steve Speaks
            </a>
          </div>
          <ul className="flex items-center gap-2">
            {socialLinks.map(({ name, href, external, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  aria-label={name}
                  title={name}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-border/80 bg-white/70 text-ink transition-colors hover:border-ink/30 hover:bg-ink hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
