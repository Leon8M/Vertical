import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send data to backend or email service)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="px-4 py-16 bg-gray-100">
      <div className="container max-w-screen-md mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-8">For Inquiries or to Request A Quote...</h2>
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F67E17] focus:border-[#F67E17] outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F67E17] focus:border-[#F67E17] outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F67E17] focus:border-[#F67E17] outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Tell us.....</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F67E17] focus:border-[#F67E17] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F67E17] hover:bg-[#FF9933] text-white font-semibold py-3 rounded-md transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
