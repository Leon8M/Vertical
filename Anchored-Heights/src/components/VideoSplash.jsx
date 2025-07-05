import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoSplash = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(onComplete, 1000); // Match animation duration
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xl"
          onClick={handleExit}
        >
          {/* Click to Enter Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="absolute bottom-20 text-white text-lg bg-black/50 px-4 py-2 rounded-lg z-20"
          >
            Click anywhere to enter
          </motion.div>

          {/* Centered Portrait Video */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
            className="relative z-10 w-[90%] max-w-[400px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl"
          >
            <video
              src="/vid1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoSplash;
