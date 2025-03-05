import React from "react";

const About = () => {
  return (
    <section id="about" className="px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-screen-lg mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-8 text-center">
          About Us
        </h2>

        {/* Company Motto Card */}
        <div className="bg-[#1D3557] rounded-lg p-6 mb-8 shadow-lg">
          <h4 className="text-xl font-semibold text-white text-center">
            Company Motto:
            <span className="block text-[#F67E17] mt-2">
              Cost-Efficient and Safe High-Altitude Cleaning Solutions
            </span>
          </h4>
        </div>

        {/* About Content */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-[#1D3557]">Vertical Techniques</span>, we specialize in industrial high-altitude cleaning, retrieval, and installation services using advanced rope access techniques. Our team of highly skilled and competent technicians delivers exceptional service with a focus on efficiency and safety, saving you both time and resources.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our experienced rope access professionals excel in completing short-term cleaning projects and complex high-altitude tasks swiftly. We eliminate the need for cumbersome scaffolding setups and breakdowns, ensuring your projects are finished quickly and without any interruptions to your core operations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover how <span className="font-semibold text-[#1D3557]">Vertical Techniques</span> can elevate your cleaning experience with our innovative approach and unparalleled expertise. Whether it’s towering skyscrapers or intricate industrial structures, we’ve got the skills and solutions to reach new heights—safely and efficiently.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact" 
            className="inline-block px-6 py-3 bg-[#F67E17] text-white font-semibold rounded-lg shadow-md hover:bg-[#FF9933] transition-all duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;