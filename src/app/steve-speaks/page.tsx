import type { Metadata } from "next";
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
      <SiteHeader variant="solid" />

      <section className="relative overflow-hidden border-b border-border/70">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,16,46,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(28,37,46,0.08),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            From the shop floor
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-ink md:text-6xl">
            Steve Speaks
          </h1>
          <div className="mt-4 h-[3px] w-24 bg-brand" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
            Short videos from {site.owner} on how we maintain and repair Honda,
            Acura, and other Japanese vehicles—factory fluids, proper torque,
            warranties, and the checklist we use every day.
          </p>
          <div className="mt-6">
            <Button
              render={
                <a href={site.youtubeUrl} target="_blank" rel="noreferrer" />
              }
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-ink/20 bg-transparent px-5 font-semibold text-ink hover:bg-ink hover:text-white"
            >
              Open YouTube channel
            </Button>
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
