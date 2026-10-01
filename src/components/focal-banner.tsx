"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Subject = { l: number; t: number; r: number; b: number };

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
  /** Region that must stay fully on screen. Tall frames scale to this box. */
  subject?: Subject;
  /**
   * Wide banners scale this subject box to the banner height so the photo
   * covers more of the frame. Home uses subject only on tall (mobile) frames.
   */
  fillFrame?: boolean;
  /** On tall frames, sit the subject in the lower open area under the title. */
  seatLow?: boolean;
};

type Box = {
  left: number;
  top: number;
  width: number;
  height: number;
  mask: boolean;
};

/**
 * Pins the image landmark in the open half of the banner.
 * object-position cannot do this: one percentage is both the image point
 * and the container point, so a landmark that is not already at ~78%
 * gets scaled from the wrong spot and clipped.
 *
 * Wide banners contain the whole photo and slide it right.
 * Wide banners with fillFrame scale the subject box to the banner height
 * so that region covers more of the frame.
 * Tall banners (mobile) scale to the subject box so the group fills the
 * frame instead of sitting in a short letterboxed strip.
 */
export function FocalBanner({
  src,
  width,
  height,
  focalX,
  focalY,
  targetX = 0.78,
  targetY = 0.62,
  subject,
  fillFrame = false,
  seatLow = false,
}: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box | null>(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const place = () => {
      const cW = frame.clientWidth;
      const cH = frame.clientHeight;
      if (cW === 0 || cH === 0) return;

      const wide = cW / cH >= width / height;
      const frameSubject = wide && fillFrame && subject ? subject : null;

      if (wide && !frameSubject) {
        const scale = Math.min(cW / width, cH / height);
        const sW = width * scale;
        const sH = height * scale;
        let left = targetX * cW - focalX * sW;
        const minLeft = Math.min(0, cW - sW);
        const maxLeft = Math.max(0, cW - sW);
        left = Math.min(maxLeft, Math.max(minLeft, left));
        setBox({
          left,
          top: sH < cH - 1 ? cH - sH : 0,
          width: sW,
          height: sH,
          mask: left > 8,
        });
        return;
      }

      if (frameSubject) {
        // Scale the drawn focus frame so its height fills the banner.
        // The photo then covers more width instead of sitting in a narrow strip.
        const subH = Math.max(0.2, frameSubject.b - frameSubject.t) * height;
        let scale = cH / subH;
        if (width * scale > cW) scale = cW / width;
        const sW = width * scale;
        const sH = height * scale;

        let top = -frameSubject.t * sH;
        top = Math.min(0, Math.max(cH - sH, top));

        let left = cW - sW;
        const leftKeepRight = cW - frameSubject.r * sW;
        const leftKeepLeft = -frameSubject.l * sW;
        left = Math.min(left, leftKeepRight);
        left = Math.max(left, leftKeepLeft);
        if (sW <= cW) {
          left = Math.min(Math.max(left, 0), cW - sW);
        } else {
          left = Math.min(0, Math.max(cW - sW, left));
        }

        setBox({
          left,
          top,
          width: sW,
          height: sH,
          mask: false,
        });
        return;
      }

      // Cover the hero so the photo is not a short letterboxed strip.
      // Pan so the subject stays in frame; side crop only if the group
      // is wider than the phone.
      const region = {
        l: subject?.l ?? Math.max(0, focalX - 0.2),
        t: subject?.t ?? Math.max(0, focalY - 0.25),
        r: subject?.r ?? Math.min(1, focalX + 0.2),
        b: subject?.b ?? Math.min(1, focalY + 0.25),
      };
      const cover = Math.max(cW / width, cH / height);
      // Phones: zoom so the top of the subject starts under the title.
      const seated = seatLow
        ? Math.max(cover, (cH * 0.58) / Math.max(0.15, region.t) / height)
        : cover;
      const scale = seated;
      const sW = width * scale;
      const sH = height * scale;

      let left = cW / 2 - ((region.l + region.r) / 2) * sW;
      left = Math.min(0, Math.max(cW - sW, left));

      let top = seatLow
        ? cH * 0.58 - region.t * sH
        : cH / 2 - ((region.t + region.b) / 2) * sH;
      top = Math.min(0, Math.max(cH - sH, top));

      setBox({
        left,
        top,
        width: sW,
        height: sH,
        mask: false,
      });
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [
    width,
    height,
    focalX,
    focalY,
    targetX,
    targetY,
    subject?.l,
    subject?.t,
    subject?.r,
    subject?.b,
    fillFrame,
    seatLow,
  ]);

  const mask = box?.mask
    ? "linear-gradient(to right, transparent, #000 16%)"
    : undefined;

  return (
    <div ref={frameRef} className="absolute inset-0 overflow-hidden">
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
                WebkitMaskImage: mask,
                maskImage: mask,
              }
            : {
                height: "100%",
                width: "auto",
                right: 0,
                top: 0,
              }
        }
      />
    </div>
  );
}
