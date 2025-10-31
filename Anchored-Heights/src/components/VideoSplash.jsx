"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VideoSplash = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef(null);

  /** === Play + Fade-In Audio === */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 0;
    video.muted = false;

    const startPlayback = async () => {
      try {
        await video.play();

        const fade = setInterval(() => {
          if (video.volume < 0.9) video.volume += 0.05;
          else clearInterval(fade);
        }, 150);

        setTimeout(() => clearInterval(fade), 4000);
      } catch (e) {
        console.warn("Autoplay blocked — muting");
        video.muted = true;
        video.play().catch(() => {});
      }
    };

    startPlayback();
  }, []);

  /** === Exit === */
  const handleExit = () => {
    setIsExiting(true);
    setTimeout(onComplete, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1, transition: { duration: 1 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-2xl overflow-hidden"
      onClick={handleExit}
    >
      {/* Scroll / Wait prompt - kept for original vibe */}
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 1 } }}
          className="absolute bottom-28 text-white/90 text-lg px-5 py-2 rounded-lg z-30 select-none font-medium tracking-wide bg-white/10 backdrop-blur-sm"
        >
          Scroll or wait ↓
        </motion.div>
      )}

      {/* Click prompt */}
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 1 } }}
          className="absolute bottom-16 text-white/80 text-base bg-black/40 px-3 py-1 rounded-md z-30 select-none"
        >
          Click anywhere to enter
        </motion.div>
      )}

      {/* === Improved Single Video Container === */}
      <div className="relative w-[90%] max-w-[420px] aspect-[9/16] z-10 overflow-hidden rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)]">
        <video
          ref={videoRef}
          src="/vid1.mp4"
          loop
          playsInline
          className="w-full h-full object-cover brightness-100"
        />
      </div>

      {/* Fake "dots" but only 1 for visual consistency */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        <motion.div
          animate={{ scale: 1.3, opacity: 1 }}
          className="w-3 h-3 bg-white rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default VideoSplash;
