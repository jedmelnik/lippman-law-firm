import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Law Offices of Eliot M. Lippman in San Rafael for a consultation. Call (415) 457-8898. 1000 5th Avenue, Suite 1.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Contact"
          title="Schedule a consultation"
          lede="Call or write from downtown San Rafael."
          // Focal: center of the clasped hands
          image={{
            src: "/images/hero-handshake.jpg",
            alt: "Handshake across a desk during a consultation",
            width: 1280,
            height: 720,
            focalX: 0.58,
            focalY: 0.48,
          }}
          actions={
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-11 rounded-md bg-gold px-5 text-sm font-semibold text-ink hover:bg-gold/90 md:h-12 md:px-6"
            >
              Call {site.phone}
            </Button>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <h2 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                Our office
              </h2>
              <address className="mt-4 not-italic text-base leading-relaxed text-foreground/85">
                {site.name}
                <br />
                {site.address.street}
                <br />
                {site.address.suite}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
              <p className="mt-4">
                <a
                  href={site.phoneHref}
                  className="text-lg font-semibold text-navy hover:underline"
                >
                  {site.phone}
                </a>
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                Serving clients throughout {site.serviceArea}.
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-navy hover:underline"
              >
                Get directions on Google Maps
              </a>

              <div className="mt-8 overflow-hidden rounded-md border border-border bg-muted">
                <iframe
                  title="Map to Law Offices of Eliot M. Lippman"
                  src={site.mapsEmbed}
                  className="h-64 w-full border-0 md:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                Send a message
              </h2>
              <p className="mt-3 text-base text-foreground/75">
                Tell us briefly about your situation. We will follow up to
                schedule a consultation.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-foreground/55">
                Attorney Advertising. This website is designed for general
                information only. The information presented at this site should
                not be construed to be formal legal advice nor the formation of a
                lawyer/client relationship.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
