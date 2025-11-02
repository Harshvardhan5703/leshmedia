// components/Footer.tsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-full text-gray-300 py-8 px-4">
      {/* First Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 pb-6 ">
          <div className="text-sm font-medium text-gray-200">
            Digital marketing agency that helps you <br />
            scale your brand online.
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Portfolio
            </a>
          </nav>
        </div>

        {/* Second Section */}
        <div className="py-8 text-center">
          <h2 className="text-4xl md:text-9xl font-bold bg-clip-text ">
            LESH MEDIA
          </h2>
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6  space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {currentYear} Lesh Media. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
            <span className="flex flex-col gap-2">
              <span className="text-2xl">Location</span>
              <span>Jaipur, Rajasthan</span>
            </span>
              <span className="flex flex-col gap-2">
              <span className="text-2xl">Contact US</span>
              <span>hello@leshmedia.com</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
