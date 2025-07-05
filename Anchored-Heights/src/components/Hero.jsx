// Updated Hero.jsx with improved UI, typography, and button animations
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/4657.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex items-center justify-start container">
        <div className="max-w-2xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold leading-tight"
          >
            Leave the heights to us,<br /> so you can focus on yours!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-lg md:text-xl"
          >
            Specializing in high-altitude building cleaning, structural repairs, and installations.
          </motion.p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accentHover text-white font-semibold py-3 px-6 rounded-md transition-all duration-300"
          >
            Learn More <ArrowRight size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
