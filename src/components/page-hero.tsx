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
  /** "home" = slightly roomier lockup; "page" = compact interior banner. */
  size?: "home" | "page";
  /** Show lede on small screens (default: desktop only). */
  ledeOnMobile?: boolean;
};

/** Brand fill beyond the capped media plane (website-banners). */
export const HERO_FILL = "#0d1116";

/**
 * Shared banner frame — website-banners skill:
 * - Height hugs the type lockup (+ modest padding), not a tall vw photo stage
 * - Left-justified type → gradient from the left; fades before the subject
 * - Photo + gradient on a centered media plane max 1600px; ink fills beyond
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
      {/* Capped media plane — ultrawide gets ink fill past ~1600px */}
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
        {/* Left-justified lockup → gradient from the left (desktop+) */}
        <div
          className="absolute inset-0 hidden bg-gradient-to-r from-[#0d1116] from-0% via-[#0d1116]/90 via-30% to-transparent to-[68%] md:block"
          aria-hidden
        />
        {/* Mobile: type still left-aligned in the short frame — side scrub + light bottom for contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0d1116] from-0% via-[#0d1116]/88 via-40% to-transparent to-[75%] md:hidden"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0d1116]/75 to-transparent md:hidden"
          aria-hidden
        />
        {/* Ultrawide: dissolve the plane’s right edge into section ink */}
        <div
          className="absolute inset-y-0 right-0 hidden w-36 bg-gradient-to-l from-[#0d1116] to-transparent min-[1600px]:block"
          aria-hidden
        />
        {/* Soft top for overlay header */}
        <div
          className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0d1116]/45 to-transparent"
          aria-hidden
        />
      </div>

      {/* Lockup-hugging height — modest padding, no tall vw stage */}
      <div
        className={`site-wrap relative flex items-end ${
          home
            ? "min-h-[clamp(15rem,26vw,28rem)] py-10 md:py-14"
            : "min-h-[clamp(13.5rem,22vw,24rem)] py-9 md:py-12"
        }`}
      >
        <div
          className={`animate-rise w-full ${
            home ? "max-w-xl xl:max-w-2xl" : "max-w-md lg:max-w-lg xl:max-w-xl"
          }`}
        >
          {kicker ? (
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/65 md:text-xs">
              {kicker}
            </p>
          ) : null}
          <h1
            className={`mt-2 font-display tracking-wide text-balance text-white ${
              home
                ? "text-[clamp(2.5rem,8vw,4.75rem)] leading-[0.92]"
                : "text-[clamp(2.25rem,7vw,4rem)] leading-[0.94]"
            }`}
          >
            {title}
          </h1>
          <div className="mt-3 h-[3px] w-20 bg-brand md:w-24" />
          {lede ? (
            <p
              className={`mt-4 max-w-md text-pretty text-white/80 ${
                home ? "text-base leading-relaxed md:text-lg" : "text-[1.05rem] leading-relaxed"
              } ${ledeOnMobile ? "block" : "hidden md:block"}`}
            >
              {lede}
            </p>
          ) : null}
          {actions ? (
            <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
