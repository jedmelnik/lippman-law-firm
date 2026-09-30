import Image from "next/image";
import type { ReactNode } from "react";

export type HeroImage = {
  src: string;
  alt: string;
  /** CSS object-position — subject landmark in the open half opposite the lockup. */
  focal: string;
};

type Props = {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  image: HeroImage;
  /** "home" = taller lockup; "page" = compact interior banner. */
  size?: "home" | "page";
  /** Show lede on small screens (default: desktop only — leaner mobile). */
  ledeOnMobile?: boolean;
};

/** Brand fill beyond the capped media plane (website-banners / PageHero pattern). */
export const HERO_FILL = "#0d1116";

/**
 * Site-wide banner frame (from website-rebuild → website-banners rules):
 * - Height hugs the type lockup (padding-driven, not a tall vw photo frame).
 * - Left-justified type → gradient from the left (bottom scrub on mobile).
 * - Photo + gradient on a centered media plane capped at 1600px; ink fills beyond.
 */
export function PageHero({
  kicker,
  title,
  lede,
  actions,
  image,
  size = "page",
  ledeOnMobile = false,
}: Props) {
  const home = size === "home";

  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ backgroundColor: HERO_FILL }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[1600px] -translate-x-1/2 overflow-hidden"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="object-cover"
          style={{ objectPosition: image.focal }}
        />
        {/* Mobile: type sits low — scrub up from the bottom, clear subject above. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0d1116_0%,rgb(13_17_22/0.94)_38%,rgb(13_17_22/0.55)_52%,transparent_66%)] md:hidden" />
        {/* Desktop: strong under the left lockup, fade out before the subject. */}
        <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,#0d1116_0%,rgb(13_17_22/0.94)_26%,rgb(13_17_22/0.62)_46%,rgb(13_17_22/0.12)_64%,transparent_78%)] md:block" />
        {/* Ultrawide: dissolve the plane’s right edge into ink fill. */}
        <div className="absolute inset-y-0 right-0 hidden w-40 bg-[linear-gradient(to_left,#0d1116,transparent)] min-[1600px]:block" />
        {/* Soft top scrim for header readability. */}
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgb(13_17_22/0.4),transparent)]" />
      </div>

      <div
        className={`site-wrap relative ${
          home ? "pt-[90vw] sm:pt-[46vw] pb-12 md:py-24 lg:py-28" : "pt-[58vw] sm:pt-[34vw] pb-10 md:py-16 lg:py-20"
        }`}
      >
        <div
          className={`animate-rise ${
            home ? "max-w-xl xl:max-w-2xl" : "max-w-lg lg:max-w-xl xl:max-w-2xl"
          }`}
        >
          {kicker ? (
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/65 md:text-xs">
              {kicker}
            </p>
          ) : null}
          <h1
            className={`mt-3 font-display tracking-wide text-balance text-white ${
              home
                ? "text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.92]"
                : "text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.94]"
            }`}
          >
            {title}
          </h1>
          <div className="mt-3 h-[3px] w-20 bg-brand md:w-24" />
          {lede ? (
            <p
              className={`mt-5 max-w-md text-pretty text-white/80 lg:max-w-xl ${
                home ? "text-base leading-relaxed md:text-lg" : "text-[1.0625rem] leading-relaxed"
              } ${ledeOnMobile ? "block" : "hidden md:block"}`}
            >
              {lede}
            </p>
          ) : null}
          {actions ? (
            <div className="mt-7 flex flex-wrap items-center gap-3">{actions}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
