import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VideoGrid } from "@/components/video-grid";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { getChannelVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Steve Speaks | Steve's Auto Care Novato",
  description:
    "Watch Steve Lite share straight talk on Honda and Acura care—fluids, torque, warranties, and more from Steve's Auto Care in Novato.",
};

/** Keep the page fresh as new YouTube uploads appear (~hourly). */
export const revalidate = 3600;

export default async function SteveSpeaksPage() {
  const { videos, error } = await getChannelVideos();

  return (
    <main className="flex flex-1 flex-col">
      {/* Banner — Steve on the right; copy locked to the left fade */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/steve-speaks-banner.jpg"
            alt="Steve Lite using a torque wrench under a car at Steve's Auto Care"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_center] sm:object-[82%_center] lg:object-center"
          />
          {/* Extra left stage so copy never hits his face; section bg-ink extends ultra-wide */}
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#0d1116_0%,#0d1116_46%,rgba(13,17,22,0.62)_60%,rgba(13,17,22,0.18)_74%,transparent_88%)] sm:bg-[linear-gradient(90deg,#0d1116_0%,#0d1116_36%,rgba(13,17,22,0.5)_52%,rgba(13,17,22,0.12)_66%,transparent_80%)] lg:bg-[linear-gradient(90deg,#0d1116_0%,rgba(13,17,22,0.72)_22%,rgba(13,17,22,0.28)_38%,rgba(13,17,22,0.08)_50%,transparent_62%)]"
            aria-hidden
          />
        </div>

        <SiteHeader variant="overlay" />

        <div className="relative z-10 mx-auto flex min-h-[17.5rem] max-w-6xl flex-col justify-end px-5 pb-8 pt-24 sm:min-h-[20rem] md:min-h-[22rem] md:px-8 md:pb-12 md:pt-28 lg:min-h-[26rem]">
          <div className="max-w-[20rem] sm:max-w-md lg:max-w-lg">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/65 md:text-xs">
              From the shop floor
            </p>
            <h1 className="mt-2 font-display text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.92] tracking-wide text-white">
              Steve Speaks
            </h1>
            <div className="mt-3 h-[3px] w-20 bg-brand md:w-24" />
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/80 md:mt-5 md:text-lg">
              Short videos from {site.owner} on Honda, Acura, and Japanese
              vehicle care—factory fluids, proper torque, warranties, and the
              checklist we use every day.
            </p>
            <div className="mt-5">
              <Button
                render={
                  <a href={site.youtubeUrl} target="_blank" rel="noreferrer" />
                }
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-white/35 bg-white/5 px-5 font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                Open YouTube channel
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl flex-1 px-5 py-14 md:px-8 md:py-20">
        {videos.length > 0 ? (
          <>
            <p className="mb-8 text-sm text-muted-foreground">
              Showing {videos.length} video{videos.length === 1 ? "" : "s"} ·
              newest at the top
            </p>
            <VideoGrid videos={videos} />
          </>
        ) : (
          <div className="max-w-xl border-l-2 border-brand pl-6">
            <h2 className="font-display text-3xl tracking-wide text-ink">
              Videos unavailable right now
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {error
                ? "We couldn’t load the latest uploads from YouTube. Please try again shortly, or visit the channel directly."
                : "No videos were returned from the channel feed yet."}
            </p>
            <a
              href={site.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block font-semibold text-brand underline-offset-4 hover:underline"
            >
              Watch on YouTube
            </a>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
