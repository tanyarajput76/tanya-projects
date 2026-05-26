import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { assets } from '../assets/assets';
import resumePdf from '../assets/tr.pdf';

const Hero = () => {
  return (
    <div
      name="home"
      className="h-screen w-full flex flex-col md:flex-row items-center justify-center bg-bg-primary pt-20 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full md:flex-row md:justify-between w-full">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent-color text-lg sm:text-xl font-medium mb-2"
          >
            Welcome to my world
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-text-primary"
          >
            Hi, I'm <br/>
            <span className="text-gradient">Tanya Rajput</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl sm:text-4xl font-semibold text-text-secondary mt-4 typewriter"
          >
            Frontend & Java Developer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-text-secondary py-4 max-w-md mt-4 text-lg"
          >
            I build responsive, beautiful, and functional web applications using modern technologies. Let's create something amazing together!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-4 mt-6"
          >
            <a 
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-indigo-500/30"
            >
              Show Resume
            </a>
            <Link 
              to="contact" 
              smooth 
              duration={500}
              offset={-80}
              className="px-6 py-3 rounded-full border-2 border-accent-color text-accent-color font-medium hover:bg-accent-color hover:text-white transition-all cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex gap-6 mt-8"
          >
            <a href="#" className="text-text-secondary hover:text-accent-color text-2xl transition-colors"><FaGithub /></a>
            <a href="#" className="text-text-secondary hover:text-accent-color text-2xl transition-colors"><FaLinkedin /></a>
            <a href="#" className="text-text-secondary hover:text-accent-color text-2xl transition-colors"><FaTwitter /></a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mt-8 md:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-50 animate-pulse"></div>
            <img
              src={assets.tanyaImg}
              alt="Tanya Rajput"
              className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
