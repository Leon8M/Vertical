import React from 'react';

const Services = () => {
  return (
    <section id="services" className="px-4 py-16 bg-gray-100">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-8">Consider Our Services…because we are</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">Expert Technicians</h3>
            <p className="text-gray-700">Our team consists of highly skilled rope access professionals
            trained to handle complex cleaning tasks at any height.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">Efficiency Focused</h3>
            <p className="text-gray-700">We prioritize quick turnarounds, ensuring projects are
            completed without downtime or disruption to your business operations.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">Cost-Effective Solutions</h3>
            <p className="text-gray-700">Our methods eliminate the need for expensive scaffolding,
            offering you a more budget-friendly alternative.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg sm:col-start-2">
            <h3 className="text-2xl font-semibold text-[#F67E17] mb-4">Safety First</h3>
            <p className="text-gray-700">We adhere to strict safety protocols and use state-of-the-art equipment
            to guarantee safe and effective service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
