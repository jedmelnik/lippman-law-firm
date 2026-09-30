import type { YouTubeVideo } from "@/lib/youtube";

type VideoGridProps = {
  videos: YouTubeVideo[];
};

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
      {videos.map((video) => (
        <li key={video.id} className="flex flex-col gap-3">
          <div className="relative aspect-video overflow-hidden rounded-md bg-ink/90 shadow-[0_12px_40px_-24px_rgba(13,17,22,0.55)]">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-wide text-ink">
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-brand"
              >
                {video.title}
              </a>
            </h2>
            {video.published ? (
              <p className="mt-1 text-sm text-muted-foreground">
                {formatDate(video.published)}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
