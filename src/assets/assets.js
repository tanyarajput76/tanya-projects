import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaJava, 
  FaLeaf, 
  FaDatabase, 
  FaBootstrap, 
  FaGithub,
  FaCode,
  FaServer,
  FaDesktop
} from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

import tanyaImg from './tanya.jpeg';
import projectImg1 from './project1.avif';
import projectImg2 from './project2.avif';
import projectImg3 from './project3.avif';

export const assets = {
    tanyaImg,
};

export const aboutInfo = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Passionate about building beautiful, responsive, and intuitive user interfaces.',
      color: 'text-blue-500'
    },
    {
      icon: FaServer,
      title: 'Java Full-Stack',
      description: 'Building robust backend systems with Java and Spring Boot to support scalable applications.',
      color: 'text-green-500'
    },
    {
      icon: FaDesktop,
      title: 'Design Oriented',
      description: 'Creating premium user experiences with modern design principles and animations.',
      color: 'text-purple-500'
    }
];

export const skills = [
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'React JS', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Java', icon: FaJava, color: 'text-red-500' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
  { name: 'MySQL', icon: FaDatabase, color: 'text-blue-600' },
  { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
  { name: 'Git & GitHub', icon: FaGithub, color: 'text-gray-200' },
];

export const projects = [
  {
    title: "Cafe Management System",
    description: "A comprehensive Spring Boot and MySQL application featuring an admin dashboard, menu management, and a customer review system.",
    image: projectImg1,
    tech: ["Spring Boot", "MySQL", "Java", "Bootstrap"],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A fully responsive, modern personal portfolio website built with React and Tailwind CSS, featuring smooth animations and a premium UI.",
    image: projectImg2,
    tech: ["React JS", "Tailwind CSS", "Framer Motion"],
    demo: "#",
    code: "#",
  }
];
