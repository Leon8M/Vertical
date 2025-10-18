// Updated Why.jsx with icon, styling and animation
import React from 'react';
import whyData from '../why';
import { ShieldCheck, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [<ShieldCheck />, <Zap />, <Award />];

const Why = () => {
  return (
    <section id="why" className="bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          What Sets Us Apart?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyData.map((why, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="card"
            >
              <div className="mb-4 text-accent">{icons[index % icons.length]}</div>
              <h3 className="text-xl font-bold text-accent mb-2">
                {why.title}
              </h3>
              <p className="text-gray-700">
                {why.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
