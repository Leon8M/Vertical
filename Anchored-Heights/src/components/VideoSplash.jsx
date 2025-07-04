import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VideoSplash = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(onComplete, 1500); // Match animation duration
  };

  const handleVideoClick = (path) => {
    navigate(path);
    onComplete(); // Ensure splash is removed when navigating
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md"
          onClick={handleExit}
        >
          {/* Click to Enter Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="absolute z-20 text-white text-lg bg-black/50 p-3 rounded-lg"
          >
            Click anywhere to enter
          </motion.div>

          {/* Video Containers */}
          <div className="flex gap-2 h-full w-full">
            {/* Video 1 (Visible on all screens) */}
            <motion.div
              className="w-full md:w-1/2 h-full cursor-pointer"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.stopPropagation();
                handleVideoClick("/projects");
              }}
            >
              <video
                src="/vid1.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                playbackrate={0.5} // Slowed down
              />
            </motion.div>

            {/* Video 2 (Visible on md and larger screens) */}
            <motion.div
              className="hidden md:block w-1/2 h-full cursor-pointer"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.stopPropagation();
                handleVideoClick("/projects");
              }}
            >
              <video
                src="/vid2.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                playbackrate={0.5}
              />
            </motion.div>
          </div>

          {/* Animated corner videos on exit */}
          {isExiting && (
            <>
              <motion.video
                src="/vid1.mp4"
                autoPlay
                muted
                loop
                initial={{ x: 0, y: 0, width: "50%", height: "100%" }}
                animate={{
                  x: "-50vw",
                  y: "50vh",
                  width: "200px",
                  height: "auto",
                  transition: { duration: 1.5 },
                }}
                className="fixed bottom-4 left-4 z-[110] rounded-lg shadow-2xl"
                onClick={() => handleVideoClick("/projects")}
              />
              <motion.video
                src="/vid2.mp4"
                autoPlay
                muted
                loop
                initial={{ x: 0, y: 0, width: "50%", height: "100%" }}
                animate={{
                  x: "50vw",
                  y: "50vh",
                  width: "200px",
                  height: "auto",
                  transition: { duration: 1.5 },
                }}
                className="fixed bottom-4 right-4 z-[110] rounded-lg shadow-2xl hidden md:block"
                onClick={() => handleVideoClick("/projects")}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoSplash;