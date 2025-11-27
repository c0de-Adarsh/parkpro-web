// components/ContactSection.js
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
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
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
  <section className="py-4 sm:py-4 lg:py-8 px-8 sm:px-14 lg:px-20 bg-white hover:bg-[#F3BABA] transition-colors duration-300">
      <div className="max-w-8xl mx-auto">
        {/* Contact Form Card */}
        <div className="bg-white rounded-xl sm:rounded-[20px] p-8 sm:p-12 lg:p-16 shadow-xl">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              CONTACT
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Have questions or want to collaborate with us? Send a message and we'll get back to you
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Top Row - Name, Email, Organization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b-2 border-[#F3BABA] focus:border-black outline-none py-2 text-base bg-transparent transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 border-[#F3BABA] focus:border-black outline-none py-2 text-base bg-transparent transition-colors"
                  required
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-black mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full border-b-2 border-[#F3BABA] focus:border-black outline-none py-2 text-base bg-transparent transition-colors"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full border-b-2 border-[#F3BABA] focus:border-[#F3BABA] outline-none py-2 text-base bg-transparent resize-none transition-colors"
                required
              ></textarea>

              {/* Hand Cursor Icon - Bottom Right */}
              <div className="absolute bottom-4 right-4">
               
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-black text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors transform hover:scale-105 duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}