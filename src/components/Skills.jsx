import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../assets/assets';

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-bg-primary text-text-primary py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center h-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-8 text-center"
        >
          <p className="text-4xl font-bold inline border-b-4 border-accent-color text-gradient">
            Skills
          </p>
          <p className="py-6 text-text-secondary">These are the technologies I've worked with</p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-2 sm:px-0">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="shadow-md glass hover:shadow-xl rounded-2xl py-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
              >
                <Icon className={`text-6xl mx-auto ${skill.color} drop-shadow-md`} />
                <p className="mt-4 font-medium text-text-secondary group-hover:text-text-primary">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Skills;
