import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { practiceAreas, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex flex-1 flex-col">
        <PageHero
          size="home"
          kicker="San Rafael · Marin County"
          title={
            <>
              Law Offices of
              <br />
              Eliot M. Lippman
            </>
          }
          lede="Protecting older adults and their families through conservatorship, probate, trust administration, and estate planning."
          ledeOnMobile
          // Focal: family group / sunset center-right, clear of left lockup
          image={{
            src: "/images/hero-family.jpg",
            alt: "Multi-generational family standing together on a beach at sunset",
            focal: "72% 45%",
          }}
          actions={
            <>
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 rounded-md bg-gold px-5 text-sm font-semibold text-ink shadow-none transition-transform hover:bg-gold/90 hover:scale-[1.02] active:scale-[0.99] md:h-12 md:px-6 md:text-base"
              >
                Call {site.phone}
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-white/40 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white md:h-12 md:px-6 md:text-base"
              >
                Free consultation
              </Button>
            </>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">
              Why families call
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Protecting your loved ones
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
              At the Law Offices of Eliot M. Lippman, we believe older adults
              must be protected if and when their mental and physical capacity
              declines. The heart of this practice is assisting families to
              establish protections for loved ones with dementia or other
              cognitive deficits.
            </p>
            <p className="mt-4 hidden text-base leading-relaxed text-foreground/80 md:block md:text-lg">
              We serve individuals of diverse backgrounds - petitioning for and
              administering conservatorships of the person and estate; obtaining
              protective and restraining orders when necessary; and drafting
              estate planning documents.
            </p>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/60 py-14 md:py-20">
          <div className="site-wrap">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">
                Practice areas
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                How we can help
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                Focused counsel for the moments that matter most for aging
                parents, estates, and long-term plans.
              </p>
            </div>

            {/* Mobile: single clear entry; desktop: three open rows */}
            <div className="mt-8 md:hidden">
              <Link
                href="/practice-areas"
                className="group relative block overflow-hidden rounded-lg"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/hero-documents.jpg"
                    alt="Hands signing estate planning documents"
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: "50% 40%" }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl text-white">
                    View practice areas
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Conservatorship · Probate & Trust · Estate Planning
                  </p>
                </div>
              </Link>
            </div>

            <ul className="mt-10 hidden divide-y divide-border md:block">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={area.href}
                    className="group grid gap-6 py-8 md:grid-cols-[1fr_1.4fr] md:items-center lg:grid-cols-[280px_1fr]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src={area.image}
                        alt={area.imageAlt}
                        fill
                        sizes="280px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-navy lg:text-3xl">
                        {area.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/75">
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
          </div>
        </section>

        <section className="site-wrap py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[220px_1fr]">
            <div className="relative mx-auto aspect-[3/4] w-44 overflow-hidden rounded-md bg-muted shadow-sm lg:w-full">
              <Image
                src="/images/attorney.jpg"
                alt="Attorney Eliot M. Lippman"
                fill
                sizes="220px"
                className="object-cover object-top"
              />
            </div>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">
                Experience, knowledge, and compassion
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Attorney Eliot M. Lippman
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
                Attorney Eliot M. Lippman has been practicing estate planning and
                conservatorship law for 20 years. His concern for the elderly
                motivates him to deliver practical legal solutions that protect
                individuals and their assets while upholding dignity in later
                years.
              </p>
              <p className="mt-4 hidden text-base leading-relaxed text-foreground/80 md:block md:text-lg">
                Conveniently located in downtown San Rafael, the firm serves
                clients throughout {site.serviceArea}.
              </p>
              <div className="mt-6">
                <Button
                  render={<Link href="/attorney" />}
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-md border-navy/30 bg-transparent px-5 text-sm font-semibold text-navy hover:bg-navy/5"
                >
                  Attorney profile
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
