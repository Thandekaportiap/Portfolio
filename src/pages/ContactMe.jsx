import React from 'react';

const ContactMe = () => {
  return (
    <div className="contact-section container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center">
        
        {/* Contact Form */}
        <div className="md:w-1/2 w-full max-w-md">
          <form className="bg-white shadow-lg rounded-lg p-8">
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B1C98D]"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B1C98D]"
                placeholder="Your email"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B1C98D]"
                rows="5"
                placeholder="Your message"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#B1C98D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info Section */}
        <div className="md:w-1/2 w-full max-w-md mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <p className="mb-2">
            <strong>Email:</strong> thandekaportiap05@gmail.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +27 8263 25121
          </p>
          <p className="mb-2">
            <strong>Location:</strong> South Africa
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
