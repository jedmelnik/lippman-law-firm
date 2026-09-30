import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { attorneyProfile, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Attorney Profile",
  description:
    "Meet San Rafael conservatorship and estate planning attorney Eliot M. Lippman - UC Hastings J.D., Marin County resident since 1980.",
};

export default function AttorneyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Attorney profile"
          title={attorneyProfile.name}
          lede="Conservatorship, estate planning, and probate counsel for Marin County and San Francisco families."
          // Focal: professional consultation subject on the right
          image={{
            src: "/images/hero-consult.jpg",
            alt: "Professional advisor in a consultation setting",
            focal: "68% 22%",
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
          <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:items-start">
            <div className="relative mx-auto aspect-[3/4] w-40 overflow-hidden rounded-md bg-muted lg:w-full">
              <Image
                src="/images/attorney.jpg"
                alt="Attorney Eliot M. Lippman"
                fill
                sizes="200px"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="max-w-3xl">
              <h2 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                Practice areas
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {attorneyProfile.practiceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-md bg-navy/8 px-3 py-1.5 text-sm font-medium text-navy"
                  >
                    {area}
                  </li>
                ))}
              </ul>

              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/60">
                    Admitted
                  </dt>
                  <dd className="mt-2 text-base text-foreground/85">
                    {attorneyProfile.admitted}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/60">
                    Education
                  </dt>
                  <dd className="mt-2 space-y-4">
                    {attorneyProfile.education.map((edu) => (
                      <div key={edu.school}>
                        <p className="text-base font-medium text-ink">
                          {edu.school}
                        </p>
                        <p className="text-base text-foreground/80">
                          {edu.degree}
                        </p>
                        {edu.notes.length > 0 ? (
                          <ul className="mt-2 space-y-1 text-sm text-foreground/70">
                            {edu.notes.map((note) => (
                              <li key={note}>{note}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/60">
                    Associations & memberships
                  </dt>
                  <dd className="mt-2">
                    <ul className="space-y-2 text-base text-foreground/85">
                      {attorneyProfile.associations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              <h2 className="mt-12 font-display text-2xl tracking-tight text-ink md:text-3xl">
                Biographical details
              </h2>
              {attorneyProfile.bio.map((para) => (
                <p
                  key={para.slice(0, 32)}
                  className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg"
                >
                  {para}
                </p>
              ))}

              <div className="mt-10">
                <Button
                  render={<Link href="/contact" />}
                  size="lg"
                  className="h-11 rounded-md bg-navy px-5 text-sm font-semibold text-white hover:bg-navy/90"
                >
                  Contact attorney Eliot M. Lippman
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
