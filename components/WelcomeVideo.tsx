"use client";

import { useRef, useState } from "react";

export function WelcomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch((err) => {
          console.warn("Video playback was prevented:", err);
        });
    }
  };

  const handleOnPlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
  };

  const handleOnPause = () => {
    setIsPlaying(false);
  };

  const handleOnEnded = () => {
    setIsPlaying(false);
    setHasStarted(false);
  };

  return (
    <section
      aria-label="Welcome video"
      className="w-full mb-16 flex flex-col items-center"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6 max-w-2xl px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <span
            className="material-symbols-outlined text-base"
            aria-hidden="true"
          >
            play_circle
          </span>
          <span>Welcome to Data Megathos</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
          Watch How We Turn Software Ideas into High-Growth Realities
        </h2>
        <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl">
          Get a quick look at our engineering standards, team capabilities, and how we help founders and SMEs launch fast.
        </p>
      </div>

      {/* Video Container */}
      <div className="w-full relative group">
        {/* Ambient background glow */}
        <div
          className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 via-primary-container/20 to-secondary/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 -z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Video Card */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/80 bg-surface shadow-2xl shadow-black/50">
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            onPlay={handleOnPlay}
            onPause={handleOnPause}
            onEnded={handleOnEnded}
            className="w-full h-full object-cover bg-black"
          >
            <source src="/videos/website_welcome.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Interactive Play Overlay (visible before first play or on ended) */}
          {!hasStarted && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/45 backdrop-blur-[2px] cursor-pointer transition-all duration-300 hover:bg-black/35 group/overlay w-full h-full border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              aria-label="Play welcome video"
            >
              <div className="relative flex items-center justify-center">
                {/* Subtle pulse ring */}
                <div
                  className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/30 animate-ping pointer-events-none"
                  aria-hidden="true"
                />

                {/* Big Play Button Circle */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl shadow-primary/50 transform group-hover/overlay:scale-110 active:scale-95 transition-transform duration-300">
                  <span
                    className="material-symbols-outlined text-3xl md:text-4xl translate-x-0.5 select-none"
                    aria-hidden="true"
                  >
                    play_arrow
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center gap-1 select-none">
                <span className="text-white text-base md:text-lg font-bold tracking-wide drop-shadow-md">
                  Click to Watch Welcome Video
                </span>
                <span className="text-slate-300 text-xs md:text-sm font-medium">
                  Quick Introduction &bull; 0:38
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

