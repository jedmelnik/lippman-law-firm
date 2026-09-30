import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HERO_FILL, PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Steve's Auto Care Novato",
  description:
    "Call, email, or visit Steve's Auto Care at 879 Sweetser Ave, Novato. Monday-Friday 8:00am-5:00pm. Honda and Acura specialists.",
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
      <div className="relative" style={{ backgroundColor: HERO_FILL }}>
        <SiteHeader variant="overlay" />
        <PageHero
          kicker="Contact"
          title="Get in touch"
          lede="Consultations are by appointment so we can understand your needs, explain your options, and help you choose what’s best for your vehicle and budget."
          size="page"
          image={{
            src: "/images/contact-team-hero-v2.jpg",
            alt: `The ${site.name} team at the Novato shop`,
            // Focal: team faces in the open right half; real photo only (no baked pad/smear)
            focal: "70% 40%",
          }}
          actions={
            <>
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 rounded-md bg-brand px-5 font-semibold text-brand-foreground hover:bg-brand/90"
              >
                Call {site.phone}
              </Button>
              <Button
                render={<a href={site.emailHref} />}
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-white/35 bg-white/5 px-5 font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                Email the shop
              </Button>
              <Button
                render={
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer" />
                }
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-white/35 bg-white/5 px-5 font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                Get directions
              </Button>
            </>
          }
        />
      </div>

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
