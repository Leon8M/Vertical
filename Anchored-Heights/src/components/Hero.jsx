import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-center bg-cover z-11" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
      <div className="container relative z-10 flex flex-col items-start justify-center h-full px-4 mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">Reach New Heights with Confidence</h1>
        <p className="mb-8 text-lg text-white md:text-xl">Specializing in industrial high-altitude cleaning, retrieval, and installation services.</p>
        <a href="#about" className="bg-[#F67E17] hover:bg-[#FF9933] text-white font-semibold py-3 px-6 rounded-md transition-colors">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;


//Image by teksomolika on Freepik