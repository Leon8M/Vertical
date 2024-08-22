import React from 'react';

const Equipment = () => {
  return (
    <section id="equipment" className="px-4 py-16 bg-white">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-8">Our Equipment</h2>
        <ul className="space-y-4 text-gray-700 list-disc list-inside">
          <li className="flex items-start">
            <span className="flex-shrink-0 text-[#F67E17] mr-3">•</span>
            <span className="text-lg font-semibold text-[#1D3557]">Five-Point High Altitude Work Harness</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 text-[#F67E17] mr-3">•</span>
            <span className="text-lg font-semibold text-[#1D3557]">Helmets</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 text-[#F67E17] mr-3">•</span>
            <span className="text-lg font-semibold text-[#1D3557]">Carabiners</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 text-[#F67E17] mr-3">•</span>
            <span className="text-lg font-semibold text-[#1D3557]">Type-A Kernmantel Access Ropes</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 text-[#F67E17] mr-3">•</span>
            <span className="text-lg font-semibold text-[#1D3557]">Fall Arresters</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Equipment;
