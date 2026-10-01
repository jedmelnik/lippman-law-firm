"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  src: string;
  width: number;
  height: number;
  /** Landmark inside the source image, 0-1. This is the scale/pin point. */
  focalX: number;
  focalY: number;
  /**
   * Where that landmark should sit in the media plane.
   * Left-justified type: center of the open region between the lockup
   * and the right edge of the banner (about 78%).
   */
  targetX?: number;
  targetY?: number;
};

/**
 * Pins the image landmark to the open half of the banner and never crops
 * the file. object-position cannot do this: a single percentage is both
 * the image point and the container point, so a landmark that is not
 * already at ~78% gets scaled from the wrong spot and clipped.
 */
export function FocalBanner({
  src,
  width,
  height,
  focalX,
  focalY: _focalY,
  targetX = 0.78,
  targetY: _targetY = 0.55,
}: Props) {
  // focalY / targetY document the landmark. Horizontal pin does the placement;
  // vertical slack is bottom-aligned so the title stays clear of the subject.
  void _focalY;
  void _targetY;
  const frameRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const place = () => {
      const cW = frame.clientWidth;
      const cH = frame.clientHeight;
      if (cW === 0 || cH === 0) return;

      // Contain the whole photograph so heads, hands, and feet stay intact.
      const scale = Math.min(cW / width, cH / height);
      const sW = width * scale;
      const sH = height * scale;

      let left = targetX * cW - focalX * sW;
      const minLeft = Math.min(0, cW - sW);
      const maxLeft = Math.max(0, cW - sW);
      left = Math.min(maxLeft, Math.max(minLeft, left));

      // Wide banners already fill the height (top is 0).
      // Taller banners: pin the photo to the bottom so the title sits on navy
      // and the landmark stays below the lockup.
      const top = sH < cH - 1 ? cH - sH : 0;

      setBox({ left, top, width: sW, height: sH });
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [width, height, focalX, targetX]);

  return (
    <div ref={frameRef} className="absolute inset-0 overflow-hidden">
      {/* SSR / first paint: right-weighted, full height, no vertical crop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        fetchPriority="high"
        className="absolute max-w-none select-none"
        style={
          box
            ? {
                left: box.left,
                top: box.top,
                width: box.width,
                height: box.height,
                // Dissolve the photo's left edge into the navy field under the type
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, #000 16%)",
                maskImage: "linear-gradient(to right, transparent, #000 16%)",
              }
            : {
                height: "100%",
                width: "auto",
                right: 0,
                top: 0,
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, #000 16%)",
                maskImage: "linear-gradient(to right, transparent, #000 16%)",
              }
        }
      />
    </div>
  );
}
