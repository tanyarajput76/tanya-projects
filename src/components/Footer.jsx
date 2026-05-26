import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="w-full bg-bg-secondary text-text-secondary py-12 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-gradient mb-2 cursor-pointer">
            <Link to="home" smooth duration={500}>Tanya.</Link>
          </h2>
          <p className="text-sm">
            Frontend & Java Developer
          </p>
        </div>

        <div className="flex gap-6 text-xl">
          <a href="#" className="hover:text-accent-color transition-colors"><FaGithub /></a>
          <a href="#" className="hover:text-accent-color transition-colors"><FaLinkedin /></a>
          <a href="#" className="hover:text-accent-color transition-colors"><FaTwitter /></a>
        </div>

      </div>
      
      <div className="max-w-screen-xl mx-auto mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Tanya Rajput. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 md:mt-0">
          Built with <FaHeart className="text-red-500" /> using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
