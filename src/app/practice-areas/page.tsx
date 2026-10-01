import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { practiceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas of Practice",
  description:
    "Conservatorship, probate and trust administration, and estate planning from the Law Offices of Eliot M. Lippman in San Rafael.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Practice areas"
          title="Focused counsel for families"
          lede="Three core areas of practice - each centered on protecting people, assets, and dignity."
          // Focal: pen tip on the page
          image={{
            src: "/images/hero-documents.jpg",
            alt: "Hands signing legal documents at a desk",
            width: 1280,
            height: 720,
            focalX: 0.58,
            focalY: 0.5,
          }}
        />

        <section className="site-wrap py-14 md:py-20">
          <ul className="divide-y divide-border">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={area.href}
                  className="group grid gap-6 py-10 md:grid-cols-[240px_1fr] md:items-center"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={area.image}
                      alt={area.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 240px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                      {area.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
                      {area.summary}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-navy">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
