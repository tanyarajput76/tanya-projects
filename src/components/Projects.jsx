import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../assets/assets';

const Projects = () => {
  return (
    <div name="projects" className="w-full min-h-screen bg-bg-secondary text-text-primary py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center h-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-8 text-center"
        >
          <p className="text-4xl font-bold inline border-b-4 border-accent-color text-gradient">
            Projects
          </p>
          <p className="py-6 text-text-secondary">Check out some of my recent work</p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden shadow-lg group flex flex-col"
            >
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-text-primary">{project.title}</h3>
                <p className="text-text-secondary mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-accent-color/10 text-accent-color rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent-color font-medium transition-colors"
                  >
                    <FaGithub size={20} /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform shadow-md"
                  >
                    Live Demo <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
