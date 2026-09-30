import { site } from "@/lib/site";

export type YouTubeVideo = {
  id: string;
  title: string;
  published: string;
  updated: string;
  thumbnail: string;
  url: string;
};

const CHANNEL_FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${site.youtubeChannelId}`;

/** Revalidate the channel feed about every hour so new uploads surface without a redeploy. */
export const YOUTUBE_REVALIDATE_SECONDS = 3600;

function tagValue(block: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const match = block.match(re);
  return match?.[1]?.trim() ?? "";
}

function attrValue(block: string, tag: string, attr: string): string {
  const re = new RegExp(`<${tag}[^>]*\\s${attr}="([^"]+)"[^>]*/?>`, "i");
  const match = block.match(re);
  return match?.[1]?.trim() ?? "";
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function parseFeed(xml: string): YouTubeVideo[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  const videos = entries.map((entry) => {
    const id = tagValue(entry, "yt:videoId");
    const title = decodeEntities(tagValue(entry, "title"));
    const published = tagValue(entry, "published");
    const updated = tagValue(entry, "updated");
    const thumbnail =
      attrValue(entry, "media:thumbnail", "url") ||
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

    return {
      id,
      title,
      published,
      updated,
      thumbnail,
      url: `https://www.youtube.com/watch?v=${id}`,
    };
  });

  return videos
    .filter((video) => Boolean(video.id && video.title))
    .sort((a, b) => {
      const publishedDiff =
        Date.parse(b.published) - Date.parse(a.published);
      if (publishedDiff !== 0) return publishedDiff;
      return Date.parse(b.updated) - Date.parse(a.updated);
    });
}

export async function getChannelVideos(): Promise<{
  videos: YouTubeVideo[];
  error?: string;
}> {
  try {
    const response = await fetch(CHANNEL_FEED, {
      next: { revalidate: YOUTUBE_REVALIDATE_SECONDS },
      headers: {
        Accept: "application/atom+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      return {
        videos: [],
        error: `YouTube feed returned ${response.status}`,
      };
    }

    const xml = await response.text();
    return { videos: parseFeed(xml) };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load YouTube feed";
    return { videos: [], error: message };
  }
}
