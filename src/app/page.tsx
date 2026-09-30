import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

const services = [
  {
    title: "Maintenance",
    body: "We follow the manufacturer’s schedule and install original-equipment fluids so warranties stay intact and your Honda, Acura, Toyota, or Lexus stays reliable.",
    image: "/images/service-maintenance.jpg",
    imageAlt:
      "OEM fluids, oil filter, and service checklist arranged on a shop workbench",
  },
  {
    title: "Repair",
    body: "From brakes to radiators, we use factory-correct fluids and torque wrenches on wheels, drain plugs, spark plugs, and critical fasteners - no shortcuts.",
    image: "/images/service-repair.jpg",
    imageAlt:
      "Torque wrench at a wheel hub with spark plugs staged on a tool cart in the shop bay",
  },
  {
    title: "Honest evaluation",
    body: "Integrity starts with a clear assessment of what’s needed and ends with your complete satisfaction - not upsells you don’t need.",
    image: "/images/service-evaluation.jpg",
    imageAlt:
      "Multi-point inspection checklist and diagnostic scanner on an open engine bay",
  },
];

export default function HomePage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      {/* Hero - compact banner on mobile, full-viewport on md+ */}
      <section className="relative overflow-hidden text-white md:min-h-[100svh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-shop.jpg"
            alt="Technician working under the hood in an auto repair shop"
            fill
            priority
            sizes="100vw"
            className="hero-ken object-cover object-[center_35%] md:object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,17,22,0.72)_0%,rgba(13,17,22,0.82)_100%)] md:bg-[linear-gradient(105deg,rgba(13,17,22,0.88)_0%,rgba(13,17,22,0.72)_42%,rgba(13,17,22,0.45)_100%)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,16,46,0.22),transparent_55%)]"
            aria-hidden
          />
        </div>

        <SiteHeader />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 pb-8 pt-[4.75rem] md:min-h-[100svh] md:justify-center md:px-8 md:pb-20 md:pt-24">
          <p className="animate-rise font-body text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/70 md:text-sm">
            Novato · Honda &amp; Acura specialists
          </p>
          <h1 className="animate-rise-delay-1 mt-2 max-w-4xl font-display text-[clamp(2.75rem,11vw,7.5rem)] leading-[0.9] tracking-[0.02em] text-white md:mt-3">
            {site.name}
          </h1>
          <div className="brand-rule mt-3 h-[3px] w-20 bg-brand md:mt-4 md:w-32" />
          <p className="animate-rise-delay-2 mt-4 max-w-xl font-display text-[clamp(1.25rem,4.5vw,2.35rem)] leading-tight tracking-wide text-white/95 md:mt-6">
            Dealer-level care for Japanese cars - without the dealership wait.
          </p>
          <p className="animate-rise-delay-2 mt-3 max-w-lg text-[0.95rem] leading-relaxed text-white/80 md:mt-4 md:text-lg">
            Factory-trained specialists led by ASE Certified Master Technician{" "}
            {site.owner}. Over 30 years keeping Marin’s Hondas and Acuras
            running right.
          </p>
          <div className="animate-rise-delay-3 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-8">
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-11 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-none transition-transform hover:bg-brand/90 hover:scale-[1.02] active:scale-[0.99] md:h-12 md:px-6 md:text-base"
            >
              Call {site.phone}
            </Button>
            <Button
              render={<a href={site.mapsUrl} target="_blank" rel="noreferrer" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-white/40 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white md:h-12 md:px-6 md:text-base"
            >
              Get directions
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28"
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              About the shop
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-ink md:text-5xl">
              Built on trust, not turnover
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90">
              Steve&apos;s Auto Care is dedicated to doing our best work for you
              at our shop in Novato. We build long-term relationships on the
              quality of our work - factory-trained Honda™ and Acura™ specialists,
              with most other Japanese cars welcome.
            </p>
          </div>
          <div className="border-l-2 border-brand pl-6 md:pl-8">
            <p className="font-display text-2xl tracking-wide text-ink md:text-3xl">
              {site.owner}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              AA in Auto Technologies (De Anza College). ASE Certified Master
              Technician. Honda and Acura master technician with 30+ years of
              experience - honesty and integrity as the standard.
            </p>
          </div>
        </div>
      </section>

      {/* Services - one job, no card clutter */}
      <section
        id="services"
        className="border-y border-border/70 bg-[#f4f7fa]/80"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            What we do
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-wide text-ink md:text-5xl">
            Maintenance and repair the right way
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Minor, intermediate, major, and 100K services - with an emphasis on
            Honda, Acura, Toyota, and Lexus.
          </p>
          <ul className="mt-12 divide-y divide-border/80 border-y border-border/80">
            {services.map((item) => (
              <li
                key={item.title}
                className="grid items-center gap-5 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-steel/40">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-ink md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button
              render={<a href="/services" />}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-ink/20 bg-transparent px-5 font-semibold text-ink hover:bg-ink hover:text-white"
            >
              Full services details
            </Button>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Neighbors trust us
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-ink md:text-5xl">
              {site.yelpRating} stars on Yelp
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              From {site.yelpReviews} reviews - and counting.
            </p>
          </div>
          <Button
            render={
              <a href={site.yelpUrl} target="_blank" rel="noreferrer" />
            }
            variant="outline"
            size="lg"
            className="h-11 w-fit rounded-md border-ink/20 bg-transparent px-5 font-semibold text-ink hover:bg-ink hover:text-white"
          >
            Read Yelp reviews
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
