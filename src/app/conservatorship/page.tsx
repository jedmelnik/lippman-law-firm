import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conservatorship",
  description:
    "San Rafael conservatorship attorney Eliot M. Lippman helps families protect incapacitated adults, explore alternatives, and administer conservatorships in Marin County.",
};

export default function ConservatorshipPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Conservatorship"
          title="Protect family members"
          lede="Act quickly when capacity declines."
          // Focal: center of the stacked hands
          image={{
            src: "/images/hero-hands.jpg",
            alt: "Family hands stacked together in a show of support",
            width: 1280,
            height: 720,
            focalX: 0.72,
            focalY: 0.5,
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
            In California, when an adult becomes incapacitated and unable to
            provide for personal needs, manage financial resources, and/or resist
            undue influence, a conservatorship of the person and estate may be
            necessary - especially if a durable power of attorney was never
            signed. In some instances, someone may be taking advantage of your
            loved one&apos;s diminished capacity. The Law Offices of Eliot M.
            Lippman can advise you on setting up legal protections for an elderly
            parent or relative.
          </p>

          <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
            Exploring alternatives to conservatorship
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            Our first job is to explore with you all possible alternatives to
            bringing a conservatorship action. We review existing estate planning
            documents and discuss the particulars of your situation. We have been
            effective in obtaining Elder Abuse Protective Orders to restrain
            predatory individuals without the need for a conservatorship.
          </p>

          <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
            Conservatorship proceedings
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            If a conservatorship is necessary, we are experienced in petitioning
            the Superior Court for the necessary financial and medical powers,
            including exclusive authority to consent to medical treatment when
            appropriate. After appointment of a conservator, we prepare the
            required Inventory and Appraisal, accountings, and other statutory
            filings. If you do not wish to serve as conservator, we can guide you
            in choosing someone you trust.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="h-11 rounded-md bg-navy px-5 text-sm font-semibold text-white hover:bg-navy/90"
            >
              Request a consultation
            </Button>
            <Button
              render={<Link href="/estate-planning" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-navy/30 px-5 text-sm font-semibold text-navy hover:bg-navy/5"
            >
              Estate planning
            </Button>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
