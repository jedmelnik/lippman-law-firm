import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Steve's Auto Care Novato",
  description:
    "Call, email, or visit Steve's Auto Care at 879 Sweetser Ave, Novato. Monday–Friday 8:00am–5:00pm. Honda and Acura specialists.",
};

const details = [
  {
    label: "Address",
    content: (
      <a
        href={site.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="underline-offset-4 transition-colors hover:text-brand hover:underline"
      >
        {site.address.street}
        <br />
        {site.address.city}, {site.address.state} {site.address.zip}
      </a>
    ),
  },
  {
    label: "Hours",
    content: site.hours,
  },
  {
    label: "Phone",
    content: (
      <a
        href={site.phoneHref}
        className="font-semibold underline-offset-4 hover:text-brand hover:underline"
      >
        {site.phone}
      </a>
    ),
  },
  {
    label: "Email",
    content: (
      <a
        href={site.emailHref}
        className="font-semibold underline-offset-4 hover:text-brand hover:underline"
      >
        {site.email}
      </a>
    ),
  },
] as const;

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader variant="solid" />

      <section className="relative overflow-hidden border-b border-border/70">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,16,46,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(28,37,46,0.08),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-ink md:text-6xl">
            Get in touch
          </h1>
          <div className="mt-4 h-[3px] w-24 bg-brand" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
            Consultations are by appointment so we can understand your needs,
            explain your options, and help you choose what’s best for your
            vehicle and budget. Call or email—we look forward to working with
            you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-12 rounded-md bg-brand px-6 text-base font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Call {site.phone}
            </Button>
            <Button
              render={<a href={site.emailHref} />}
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-ink/20 bg-transparent px-6 text-base font-semibold text-ink hover:bg-ink hover:text-white"
            >
              Email the shop
            </Button>
            <Button
              render={
                <a href={site.mapsUrl} target="_blank" rel="noreferrer" />
              }
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-ink/20 bg-transparent px-6 text-base font-semibold text-ink hover:bg-ink hover:text-white"
            >
              Get directions
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl flex-1 px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-start">
          <dl className="space-y-8">
            {details.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-2 text-lg leading-snug text-ink">
                  {item.content}
                </dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-border/80 pt-8 md:border-t-0 md:border-l md:pl-12 md:pt-0">
            <h2 className="font-display text-3xl tracking-wide text-ink md:text-4xl">
              Visit the shop
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              We’re at {site.address.full}. Open {site.hours}. Factory-trained
              Honda and Acura specialists led by {site.owner}.
            </p>
            <div className="mt-8 overflow-hidden rounded-sm border border-border/70 bg-steel/30">
              <iframe
                title={`Map to ${site.name}`}
                src="https://maps.google.com/maps?q=879+Sweetser+Ave,+Novato,+CA+94945&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0 md:aspect-[5/4]"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
