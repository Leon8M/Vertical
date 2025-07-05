// Updated Services.jsx with modern cards, icons and hover animation
import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import services from "../services";
import { motion } from "framer-motion";

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card relative cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="text-accent" />
                <h3 className="text-xl font-semibold text-primary">
                  {service.title}
                </h3>
              </div>

              <motion.p
                className={`text-gray-600 mt-4 transition-opacity duration-300 ${
                  hovered === index ? 'opacity-100' : 'opacity-60'
                }`}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
