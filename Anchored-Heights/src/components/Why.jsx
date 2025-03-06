import React from 'react';
import whyData from '../why'; // Import the why.js file

const Why = () => {
  return (
    <section id="services" className="px-4 py-16 bg-gray-100">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-8">What Sets Us Apart?</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyData.map((why, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">{why.title}</h3>
              <p className="text-gray-700">{why.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;