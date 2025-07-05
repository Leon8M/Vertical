import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Glee Nairobi Hotel & Residences",
    location: "Nairobi, Kenya",
    description: "Comprehensive high-altitude facade cleaning for the prestigious Glee Nairobi Hotel. Our rope access team ensured a pristine finish with minimal disruption to hotel operations, enhancing the building's aesthetic appeal.",
    videos: ["/vid1.mp4", "/vid2.mp4"],
    images: [],
  },
  // Add more projects as needed
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {project.videos.map((video, vIndex) => (
                    <video
                      key={vIndex}
                      src={video}
                      autoPlay
                      muted
                      loop
                      className="w-full h-56 object-cover rounded-lg shadow-md"
                    />
                  ))}
                  {project.images.map((image, iIndex) => (
                    <img
                      key={iIndex}
                      src={image}
                      alt={`${project.title} ${iIndex + 1}`}
                      className="w-full h-56 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#1D3557] mb-2">{project.title}</h3>
                  <p className="text-[#F67E17] font-medium text-lg mb-4">{project.location}</p>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessfulProjects;
