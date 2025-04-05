import React from "react";

const About = () => {
  return (
    <section id="about" className="px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-screen-lg mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-8 text-center">
          About Us
        </h2>

        {/* Company Motto Card *Ask tonnie when he needs it
        <div className="bg-[#1D3557] rounded-lg p-6 mb-8 shadow-lg">
          <h4 className="text-xl font-semibold text-white text-center">
            Company Motto:
            <span className="block text-[#F67E17] mt-2">
              Cost-Efficient and Safe High-Altitude Cleaning Solutions
            </span>
          </h4>
        </div>*/}

        {/* About Content , might need updating */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-[#1D3557]">Vertical Techniques</span>, we specialize in high attitude Abseil window cleaning and replacement, retrieval, sealing cracks & plastering, minor painting, leak repairs, silicone applications, solar panel cleaning, Alucobond repair, replacement and installation of equipment and rope access anchors.
            Our team of highly skilled and competent technicians delivers exceptional service with a focus on efficiency and safety, saving you both time and resources.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our experienced rope access professionals excel in completing high-rise short-term tasks and complex high-altitude projects on time. We eliminate the need for cumbersome scaffolding setups and breakdowns, ensuring your projects are finished quickly and without any interruptions to your core operations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover how <span className="font-semibold text-[#1D3557]">Vertical Techniques</span> can elevate your building’s aesthetics with our rope access expertise. Whether you need Façade cleaning, light installation, structural repairs or exterior equipment setup, we deliver outstanding result sufficiently minimizing disruption to optimize your time and resources.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <img src="/1.jpg" alt="Team working on a project" className="rounded-lg shadow-lg" />
          <img src="/2.jpg" alt="Worker using equipment" className="rounded-lg shadow-lg" />
          <img src="/3.jpg" alt="High-altitude maintenance" className="rounded-lg shadow-lg" />
          <img src="/4.jpg" alt="High-altitude maintenance" className="rounded-lg shadow-lg" />
          <img src="/5.jpg" alt="High-altitude maintenance" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;