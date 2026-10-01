import type { ReactNode } from "react";
import { FocalBanner } from "@/components/focal-banner";

export type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Landmark in the source file (0-1). The banner pins this point. */
  focalX: number;
  focalY: number;
  /**
   * Region that must stay fully visible (0-1). On tall screens the photo
   * scales around this box instead of letterboxing the whole frame.
   */
  subject?: { l: number; t: number; r: number; b: number };
  /** Wide screens scale `subject` to the banner height so the photo covers more width. */
  fillFrame?: boolean;
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
export const HERO_FILL = "#132033";

/**
 * Shared banner frame - website-banners skill:
 * - Height hugs the type lockup (+ modest padding), not a tall vw photo stage
 * - Left-justified type → gradient from the left; fades before the subject
 * - Photo + gradient on a centered media plane max 1600px; navy fills beyond
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
      {/* Capped media plane - ultrawide gets navy fill past ~1600px */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[1600px] -translate-x-1/2 overflow-hidden"
      >
        <FocalBanner
          src={image.src}
          width={image.width}
          height={image.height}
          focalX={image.focalX}
          focalY={image.focalY}
          subject={image.subject}
          fillFrame={image.fillFrame}
        />
        {/* Left-justified lockup → gradient from the left (desktop+) */}
        <div
          className="absolute inset-0 hidden bg-gradient-to-r from-[#132033] from-0% via-[#132033]/92 via-36% to-transparent to-[62%] md:block"
          aria-hidden
        />
        {/* Mobile: darken the top behind the title; leave the lower subject clear */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#132033] from-0% via-[#132033]/80 via-[42%] to-transparent to-[68%] md:hidden"
          aria-hidden
        />
        {/* Ultrawide: dissolve the plane's right edge into section navy */}
        <div
          className="absolute inset-y-0 right-0 hidden w-36 bg-gradient-to-l from-[#132033] to-transparent min-[1600px]:block"
          aria-hidden
        />
        {/* Soft top for overlay header */}
        <div
          className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#132033]/45 to-transparent"
          aria-hidden
        />
      </div>

      {/* Lockup-hugging height - pad the type (+ header clearance), never a tall vw stage */}
      <div
        className={`site-wrap relative flex items-end ${
          home
            ? "min-h-[clamp(14rem,24vw,26rem)] pb-9 pt-24 md:pb-12 md:pt-28"
            : "min-h-0 pb-8 pt-24 md:pb-10 md:pt-28 lg:pb-12"
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
            className={`mt-2 font-display tracking-tight text-balance text-white ${
              home
                ? "text-[clamp(2.35rem,6.5vw,4.25rem)] leading-[1.05]"
                : "text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.08]"
            }`}
          >
            {title}
          </h1>
          <div className="mt-3 h-[3px] w-20 bg-gold md:w-24" />
          {lede ? (
            <p
              className={`mt-4 max-w-md text-pretty text-white/80 ${
                home
                  ? "text-base leading-relaxed md:text-lg"
                  : "text-[1.05rem] leading-relaxed"
              } ${ledeOnMobile ? "block" : "hidden md:block"}`}
            >
              {lede}
            </p>
          ) : null}
          {/* Visually hidden alt for decorative hero image when title is present */}
          <span className="sr-only">{image.alt}</span>
          {actions ? (
            <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
