import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">LOGO</h2>
          <p className="text-gray-400">© 2024 MyWebsite. All rights reserved.</p>
        </div>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/services" className="hover:text-gray-300">Services</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </nav>
        <div className="mt-4 md:mt-0">
          <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-2" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" className="text-gray-400 hover:text-white mx-2" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white mx-2" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
