// Updated Contact.jsx with improved input design and icons
import React, { useState } from 'react';
import { User, Mail, Phone, MessageCircle } from 'lucide-react';

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
    e.target.submit();
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="bg-gray-100">
      <div className="container max-w-screen-md">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          For Inquiries or to Request A Quote...
        </h2>

        <form
          action="https://formsubmit.co/sales@verticaltechniques.co.ke"
          method="POST"
          onSubmit={handleSubmit}
          className="card space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-semibold text-gray-700">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" size={18} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-semibold text-gray-700">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" size={18} />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-semibold text-gray-700">
              Tell us...
            </label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-accent" size={18} />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accentHover text-white font-semibold py-3 rounded-md transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
