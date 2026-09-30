import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estate Planning",
  description:
    "Estate planning, wills, trusts, powers of attorney, and advance health care directives in San Rafael. Free initial consultation with Eliot M. Lippman.",
};

const planningItems = [
  "Estate planning",
  "Estate tax issues",
  "Executorship duties",
  "Guardianship",
  "Power of Attorney",
  "Advance Health Care Directive",
  "Will drafting and execution",
  "Trust drafting and execution",
] as const;

export default function EstatePlanningPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Estate planning"
          title="Helping you plan for the future"
          lede="Wills, trusts, and capacity documents that protect your family - with a free initial estate planning consultation."
          // Focal: pen and signing hand on the right
          image={{
            src: "/images/hero-documents.jpg",
            alt: "Hands signing estate planning documents with a pen",
            focal: "78% 45%",
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

        <article className="site-wrap max-w-3xl py-14 md:py-20">
          <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
            You work hard for your family, so knowing you have planned for their
            long-term well-being and financial security can bring comfort. As you
            consider how you would like to be remembered, or plan for the care
            and support of loved ones, the Law Offices of Eliot M. Lippman can
            help with trusts and estates matters, including:
          </p>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {planningItems.map((item) => (
              <li
                key={item}
                className="border-l-2 border-gold/70 pl-3 text-base text-foreground/85"
              >
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
            Securing your legacy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            When devising an estate plan, we consider how best to protect your
            children, support your loved ones, and contribute to the charitable
            causes that matter to you. Attorney Eliot Lippman analyzes your
            estate and strategizes the best means of transferring assets,
            minimizing taxes, establishing guardianship, and protecting your
            loved ones.
          </p>

          <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
            Wills, trusts, and capacity documents
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            Your last will provides the opportunity to distribute property,
            establish care for your children, and express your wishes. A durable
            power of attorney for financial management and an Advance Health Care
            Directive are essential documents that can help avoid the need for a
            conservatorship should you ever lose capacity.
          </p>

          <p className="mt-8 rounded-md border border-border bg-card/80 px-5 py-4 text-base text-foreground/85">
            For estate planning services in San Rafael and throughout Marin and
            San Francisco counties, call {site.phone} or contact us online to
            schedule a free initial estate planning consultation.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="h-11 rounded-md bg-navy px-5 text-sm font-semibold text-white hover:bg-navy/90"
            >
              Free consultation
            </Button>
            <Button
              render={<Link href="/conservatorship" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-navy/30 px-5 text-sm font-semibold text-navy hover:bg-navy/5"
            >
              Conservatorship
            </Button>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
