import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

  return (
    <section id="about" className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-[#1D3557] mb-8 text-center">About Us</h2>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            At <span className="font-semibold text-[#1D3557]">Vertical Techniques</span>, we specialize in high-altitude abseil services: window cleaning, equipment installation, facade repairs, and more. We save you time and cost by eliminating the need for scaffolding.
          </p>
          <p>
            Our team of rope access experts ensures safety and efficiency, handling complex projects with minimal disruption to operations.
          </p>
          <p>
            Whether it's facade cleaning, leak repairs, or silicone applications, our professionals deliver exceptional results while optimizing your time and resources.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-[#F67E17] text-white font-semibold rounded-lg shadow-md hover:bg-[#FF9933] transition duration-300"
          >
            See our successful projects
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`About ${i}`}
              className="rounded-lg shadow-lg object-cover w-full h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
