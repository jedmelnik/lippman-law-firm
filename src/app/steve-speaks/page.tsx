import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
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
      <div className="relative">
        <SiteHeader variant="overlay" />
        <PageHero
          kicker="From the shop floor"
          title="Steve Speaks"
          lede={`Short videos from ${site.owner} on Honda, Acura, and Japanese vehicle care—factory fluids, proper torque, warranties, and the checklist we use every day.`}
          size="page"
          image={{
            src: "/images/steve-speaks-hero-v6.jpg",
            alt: "Steve Lite using a torque wrench under a car at Steve's Auto Care",
            // Focal: Steve's head/eyes — open right half, below overlay header band
            focal: "78% 50%",
          }}
          actions={
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
          }
        />
      </div>

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
