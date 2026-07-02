"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*
  HOW TO ADD PHOTOS & VIDEOS:
  1. Create a folder called "gallery" inside your project's /public folder.
  2. Drop your photos/videos in it (e.g. 1.jpg, 2.jpg, day-out.mp4).
  3. Edit the list below — one entry per item.
     Images:  { type: "image", src: "/gallery/1.jpg", alt: "describe the photo" }
     Videos:  { type: "video", src: "/gallery/day-out.mp4", alt: "describe the video" }
*/
type GalleryItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

const items: GalleryItem[] = [
  { type: "image", src: "/gallery/1.jpg", alt: "Participants enjoying a community outing" },
  { type: "image", src: "/gallery/2.jpg", alt: "Skill-building activity" },
  { type: "image", src: "/gallery/3.jpg", alt: "Group lunch in the community" },
  { type: "image", src: "/gallery/4.jpg", alt: "Afternoon recreation" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  if (items.length === 0) return null;

  const prev = () => setCurrent((current - 1 + items.length) % items.length);
  const next = () => setCurrent((current + 1) % items.length);
  const item = items[current];

  return (
    <section
      id="gallery"
      className="py-28 bg-white"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b"
          style={{ borderColor: "#dceae1" }}
        >
          <div>
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
            >
              Our Community
            </p>
            <h2
              id="gallery-heading"
              className="font-serif"
              style={{ color: "#1a4731", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
            >
              Life at Bright Lives
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: "#4a7a5a", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
          >
            Moments from our days out in the community — real settings, real
            connections, real progress.
          </p>
        </div>

        {/* Main viewer */}
        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: "#eef5f0" }}
        >
          <div className="aspect-video flex items-center justify-center">
            {item.type === "video" ? (
              <video
                key={item.src}
                controls
                className="w-full h-full object-contain"
                aria-label={item.alt}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {items.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous item"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#1a4731", color: "#f0e6c8" }}
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                onClick={next}
                aria-label="Next item"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#1a4731", color: "#f0e6c8" }}
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {items.length > 1 && (
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-4">
            {items.map((it, i) => (
              <button
                key={it.src}
                onClick={() => setCurrent(i)}
                aria-label={`View item ${i + 1}: ${it.alt}`}
                className="aspect-video overflow-hidden transition-opacity duration-200"
                style={{
                  outline: i === current ? "2px solid #1a4731" : "none",
                  opacity: i === current ? 1 : 0.6,
                  backgroundColor: "#eef5f0",
                }}
              >
                {it.type === "video" ? (
                  <video src={it.src} muted className="w-full h-full object-cover" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={it.src} alt="" className="w-full h-full object-cover" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
