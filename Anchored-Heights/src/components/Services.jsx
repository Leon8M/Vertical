import React from 'react';

const Services = () => {
  return (
    <section id="services" className="px-4 py-16 bg-gray-100">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-8">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">High-Altitude Cleaning</h3>
            <p className="text-gray-700">Our rope access cleaning services ensure spotless results for skyscrapers, industrial facilities, and more, without the need for disruptive scaffolding.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">High-Altitude Retrieval</h3>
            <p className="text-gray-700">We specialize in retrieving objects from difficult-to-reach areas, ensuring safe and efficient retrieval operations at any height.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">Installation Services</h3>
            <p className="text-gray-700">Our skilled technicians can install various systems and components at high altitudes, maintaining safety and precision throughout the process.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
