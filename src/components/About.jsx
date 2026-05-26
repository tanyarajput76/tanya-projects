import React from 'react';
import { motion } from 'framer-motion';
import { aboutInfo } from '../assets/assets';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-bg-secondary text-text-primary py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center h-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-8 text-center"
        >
          <p className="text-4xl font-bold inline border-b-4 border-accent-color text-gradient">
            About Me
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center mt-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-lg text-text-secondary leading-relaxed"
          >
            <p className="mb-4">
              Hello! I'm <span className="text-accent-color font-semibold">Tanya Rajput</span>, a passionate and dedicated Web Developer with a strong focus on building responsive, scalable, and user-friendly applications. 
            </p>
            <p className="mb-4">
              My journey in tech revolves around bridging the gap between design and functionality. As a Frontend & Java Full-Stack Developer, I specialize in crafting seamless user experiences with React JS and robust backend architectures using Spring Boot and Java.
            </p>
            <p>
              My career objective is to continuously grow as a developer, tackle complex challenges, and contribute to innovative projects that make a real impact. I am always eager to learn new technologies and improve my skill set.
            </p>
            
            <div className="mt-8 border-l-4 border-accent-color pl-4">
              <h3 className="text-xl font-bold text-text-primary">Education</h3>
              <p className="text-text-secondary mt-2">B.Tech / MCA in Computer Science</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">XYZ University, 2020 - 2024</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {aboutInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index} 
                  className={`glass rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-md ${index === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <Icon className={`text-4xl mb-4 ${info.color}`} />
                  <h3 className="text-xl font-semibold mb-2 text-text-primary">{info.title}</h3>
                  <p className="text-sm text-text-secondary">{info.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
