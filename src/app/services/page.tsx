import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Steve's Auto Care Novato",
  description:
    "Maintenance and repair for Honda, Acura, Toyota, and Lexus in Novato—OEM fluids, manufacturer schedules, and proper torque on critical fasteners.",
};

const serviceTiers = [
  "Minor services",
  "Intermediate services",
  "Major services",
  "100K services",
] as const;

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="relative">
        <SiteHeader variant="overlay" />
        <PageHero
          kicker="What we do"
          title="Services"
          lede="Maintenance and repair the right way—Japanese vehicles with an emphasis on Honda, Acura, Toyota, and Lexus."
          size="page"
          image={{
            src: "/images/service-maintenance.jpg",
            alt: "OEM fluids, oil filter, and service checklist on a shop workbench",
            // Focal: workbench fluids / filter cluster in the open right half
            focal: "72% 45%",
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
                render={<a href="/contact" />}
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-white/35 bg-white/5 px-5 font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                Contact the shop
              </Button>
            </>
          }
        />
      </div>

      {/* Maintenance — original Novato page copy */}
      <section className="border-b border-border/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-14 md:px-8 md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Maintenance
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-ink md:text-5xl">
              Follow the schedule. Protect the warranty.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              We save you money and keep your vehicle running in tip-top
              condition by following the manufacturer&apos;s maintenance
              schedule.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Vehicles have changed—and so have the fluids that keep them
              reliable and trouble-free. We install original-equipment fluids to
              ensure your warranty is kept intact and your vehicle is properly
              maintained.
            </p>
            <p className="mt-6 text-base font-semibold tracking-wide text-ink">
              Japanese vehicle service with an emphasis on Honda, Acura, Toyota,
              and Lexus.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-steel/40 md:aspect-[5/4]">
            <Image
              src="/images/service-maintenance.jpg"
              alt="OEM fluids and filters staged for scheduled maintenance"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="border-t border-border/70 bg-[#f4f7fa]/80">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Service levels
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {serviceTiers.map((tier) => (
                <li
                  key={tier}
                  className="border-l-2 border-brand pl-4 py-1"
                >
                  <span className="font-display text-xl tracking-wide text-ink md:text-2xl">
                    {tier}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Repair — original Novato page copy */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-14 md:px-8 md:py-20">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-sm bg-steel/40 md:order-1 md:aspect-[5/4]">
            <Image
              src="/images/service-repair.jpg"
              alt="Torque wrench at a wheel hub with shop tools staged for repair"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Repair
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-ink md:text-5xl">
              Factory fluids. Proper torque.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              Consumers should beware of fluids that are not vehicle-specific—such
              as universal transmission, power steering, and coolant/antifreeze.
              These fluids can void your warranty and cause poor performance as
              well as reliability issues.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Steve&apos;s Auto Care installs factory fluids to ensure reliability
              and the good health of your vehicle.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              Consumers should beware of shops that don&apos;t use a torque wrench
              on your vehicle&apos;s wheels, drain plugs, spark plugs, and other
              critical fasteners.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Steve&apos;s Auto Care does use torque wrenches on all wheels, drain
              plugs, spark plugs, and critical fasteners.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,16,46,0.28),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8 md:py-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-white md:text-4xl">
              Schedule maintenance or repair
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              Call or email—we&apos;re at {site.address.street}, Novato. Open{" "}
              {site.hours}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-11 rounded-md bg-brand px-5 font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Call {site.phone}
            </Button>
            <Button
              render={<a href="/contact" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-white/35 bg-white/5 px-5 font-semibold text-white hover:bg-white/15 hover:text-white"
            >
              Contact
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
