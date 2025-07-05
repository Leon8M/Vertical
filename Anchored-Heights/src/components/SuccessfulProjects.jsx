import React from 'react';

const projects = [
  {
    title: "Glee Nairobi Hotel & Residences",
    location: "Nairobi, Kenya",
    description: "Comprehensive high-altitude facade cleaning for the prestigious Glee Nairobi Hotel. Our rope access team ensured a pristine finish with minimal disruption to hotel operations, enhancing the building's aesthetic appeal.",
    videos: ["/vid1.mp4", "/vid2.mp4"],
    images: [],
  },
  // ... more projects can be added here
];

const SuccessfulProjects = () => {
  return (
    <section id="projects" className="px-4 py-24 bg-gray-50">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D3557] mb-12 text-center">
          Our Successful Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Media Section */}
                <div className="grid grid-cols-2 gap-2 p-4">
                  {project.videos.map((video, vIndex) => (
                    <div key={vIndex} className="rounded-lg overflow-hidden">
                      <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {project.images.map((image, iIndex) => (
                     <div key={iIndex} className="rounded-lg overflow-hidden">
                        <img src={image} alt={`${project.title} ${iIndex + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#1D3557] mb-3">{project.title}</h3>
                  <p className="text-lg font-semibold text-[#F67E17] mb-4">{project.location}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessfulProjects;