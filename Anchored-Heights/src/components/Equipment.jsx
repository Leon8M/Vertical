import React from 'react';

const Equipment = () => {
  return (
    <section id="equipment" className="px-4 py-16 bg-white">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-8">Our Equipment</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">Rope Access Systems</h3>
            <p className="text-gray-700">We use state-of-the-art rope access systems that allow us to reach high altitudes safely and efficiently, ensuring secure operations.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">Safety Gear</h3>
            <p className="text-gray-700">Our technicians are equipped with the latest safety gear, including helmets, harnesses, and fall arrest systems, to ensure their safety at all times.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">Specialized Tools</h3>
            <p className="text-gray-700">We utilize a variety of specialized tools designed for high-altitude tasks, ensuring precision and efficiency in every project we undertake.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
