"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const VideoSplash = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const videos = ["/vid1.mp4", "/vid4.mp4"];
  const rotation = useMotionValue(0);
  const depth = 250;
  const inactivityTimer = useRef(null);
  const videoRefs = useRef([]);
  const isRotating = useRef(false);

  /** === Fade sound and play only active === */
  const playActiveVideo = async (index) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        v.pause();
        v.volume = 0;
      }
    });

    const videoEl = videoRefs.current[index];
    if (!videoEl) return;

    try {
      await videoEl.play();
      videoEl.muted = false;
      videoEl.currentTime = 0;
      videoEl.volume = 0;

      const fade = setInterval(() => {
        if (videoEl.volume < 0.9) videoEl.volume += 0.05;
        else clearInterval(fade);
      }, 150);

      setTimeout(() => clearInterval(fade), 4000);
    } catch {
      console.warn("Autoplay blocked, muting");
      videoEl.muted = true;
      videoEl.play().catch(() => {});
    }
  };

  useEffect(() => {
    playActiveVideo(activeVideo);
  }, [activeVideo]);

  /** === Exit === */
  const handleExit = () => {
    setIsExiting(true);
    setTimeout(onComplete, 1000);
  };

  /** === Rotate function === */
  const rotateTo = (index) => {
    if (isRotating.current) return;
    isRotating.current = true;

    const newRotation = index * 180;
    animate(rotation, newRotation, {
      duration: 1.3,
      ease: [0.25, 0.1, 0.25, 1],
      onComplete: () => {
        setActiveVideo(index);
        isRotating.current = false;
      },
    });
  };

  /** === Scroll handling === */
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = (e) => {
      const now = Date.now();
      if (now - lastScroll < 1200 || isRotating.current) return;
      lastScroll = now;

      const dir = e.deltaY > 0 ? 1 : -1;
      const next = (activeVideo + dir + videos.length) % videos.length;

      rotateTo(next);
      resetInactivityTimer();
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeVideo]);

  /** === Auto rotate === */
  const resetInactivityTimer = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      const next = (activeVideo + 1) % videos.length;
      rotateTo(next);
    }, 8000);
  };

  useEffect(() => {
    resetInactivityTimer();
    return () => clearTimeout(inactivityTimer.current);
  }, [activeVideo]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1, transition: { duration: 1 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-2xl overflow-hidden"
      onClick={handleExit}
    >
      {/* Scroll prompt */}
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 1 } }}
          className="absolute bottom-28 text-white/90 text-lg px-5 py-2 rounded-lg z-30 select-none font-medium tracking-wide bg-white/10 backdrop-blur-sm"
        >
          Scroll or wait to rotate ↓
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

      {/* === Cylinder === */}
      <div className="relative w-[90%] max-w-[420px] aspect-[9/16] perspective-[1600px] z-10">
        <motion.div
          style={{
            rotateY: rotation,
            transformStyle: "preserve-3d",
            transition: "transform 1.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
          className="relative w-full h-full"
        >
          {/* Front video */}
          <motion.div
            style={{
              transform: `rotateY(0deg) translateZ(${depth}px)`,
              backfaceVisibility: "hidden",
            }}
            className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          >
            <video
              ref={(el) => (videoRefs.current[0] = el)}
              src={videos[0]}
              loop
              playsInline
              className={`w-full h-full object-cover transition-all duration-1000 ${
                activeVideo === 0
                  ? "blur-0 brightness-100 scale-100"
                  : "blur-sm brightness-50 scale-95"
              }`}
            />
          </motion.div>

          {/* Back video */}
          <motion.div
            style={{
              transform: `rotateY(180deg) translateZ(${depth}px)`,
              backfaceVisibility: "hidden",
            }}
            className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          >
            <video
              ref={(el) => (videoRefs.current[1] = el)}
              src={videos[1]}
              loop
              playsInline
              className={`w-full h-full object-cover transition-all duration-1000 ${
                activeVideo === 1
                  ? "blur-0 brightness-100 scale-100"
                  : "blur-sm brightness-50 scale-95"
              }`}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* === Dots === */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {videos.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: activeVideo === i ? 1.3 : 1,
              opacity: activeVideo === i ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
            className="w-3 h-3 bg-white rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default VideoSplash;
