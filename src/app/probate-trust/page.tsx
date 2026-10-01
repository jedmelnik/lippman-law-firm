import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Probate & Trust Administration",
  description:
    "San Rafael probate and trust administration attorney Eliot M. Lippman guides executors and beneficiaries through California estate administration.",
};

const probateSteps = [
  "Estate administration",
  "Filing the will with the appropriate California county probate court",
  "Developing a strategy for fairly and expeditiously probating the estate",
  "Finding and collecting assets",
  "Closing and opening bank accounts",
  "Transferring assets from the deceased to the estate",
  "Paying estate taxes, if necessary",
  "Valuing, managing, preserving, and liquidating the estate",
  "Locating beneficiaries",
  "Hiring experts when appropriate",
] as const;

export default function ProbateTrustPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Probate & trust"
          title="Probate and trust help"
          lede="Counsel for executors and beneficiaries."
          // Focal: clasp. Single frame with open office on the left
          // so the short banner can bleed the photo without cropping the hands.
          image={{
            src: "/images/hero-probate.jpg",
            alt: "Two people shaking hands across a desk",
            width: 1280,
            height: 720,
            focalX: 0.68,
            focalY: 0.46,
            fillFrame: true,
            bleed: true,
            subject: { l: 0.22, t: 0.3, r: 0.98, b: 0.74 },
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
            The process of probate is often accompanied by feelings of painful
            loss. A knowledgeable, meticulous, and compassionate attorney, Eliot
            Lippman eases the stress of probating a loved one&apos;s estate and
            skillfully guides executors and beneficiaries through this complex
            process.
          </p>

          <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
            The process of probate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            Most executors have never or only rarely probated a will. We can
            guide you through the process, including:
          </p>
          <ul className="mt-6 space-y-2">
            {probateSteps.map((step) => (
              <li
                key={step}
                className="border-l-2 border-gold/70 pl-3 text-base text-foreground/85"
              >
                {step}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
            Valuing and managing the estate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            Eliot M. Lippman assists executors with collecting, managing,
            valuing, protecting, and liquidating assets. When appropriate, the
            firm calls upon accountants, financial advisors, real estate agents,
            property managers, and other professionals - including experts for
            unique assets such as antiques, rare books, automobiles, and other
            collectibles.
          </p>

          <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
            Probate disputes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            Even for seemingly straightforward estates, disputes between
            beneficiaries sometimes arise. Mr. Lippman&apos;s courtroom presence
            can calm an emotionally charged process. When it is in the best
            interest of clients to preserve familial relationships, he is adept
            at mediating disputes - and assertively defends beneficiary rights in
            California probate court when necessary.
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
              render={<Link href="/practice-areas" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-navy/30 px-5 text-sm font-semibold text-navy hover:bg-navy/5"
            >
              All practice areas
            </Button>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
