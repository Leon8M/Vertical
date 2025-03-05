import React, { useState } from "react";
import services from "../services"; // Import the services data

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="equipment" className="px-4 py-16 bg-white">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-8">
          Our Services
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <li
              key={index}
              className="relative p-6 bg-gray-50 rounded-lg shadow-sm transition-all duration-500 ease-in-out"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 text-[#F67E17] mr-3">•</span>
                <span className="text-lg font-semibold text-[#1D3557]">
                  {service.title}
                </span>
              </div>

              <div
                className={`absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-lg p-6 transition-opacity transform scale-95 duration-500 ease-in-out ${
                  hoveredService === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0 pointer-events-none"
                }`}
              >
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
