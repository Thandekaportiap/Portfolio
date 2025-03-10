import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaMobileAlt, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiExpo, SiPostman } from 'react-icons/si';


const Fullstack = require('../assets/Tpp.jpg');

const AboutMe = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const skills = [
    { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-500 text-3xl" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: 'SQL & SQLite', icon: <FaDatabase className="text-gray-600 text-3xl" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
    { name: 'API Development', icon: <SiPostman className="text-green-400 text-3xl" /> },
    { name: 'Responsive Design', icon: <FaMobileAlt className="text-purple-500 text-3xl" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-indigo-500 text-3xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500 text-3xl" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-400 text-3xl" /> },
    { name: 'React Native', icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: 'Expo CLI', icon: <SiExpo className="text-black text-3xl" /> },
  ];

  return (
    <div className="container min-h-screen px-4 py-12 mx-auto about-section">
    <div className="flex flex-col items-center md:flex-row">
      {/* Text Section */}
      <div className="mb-8 md:w-1/2 md:mb-0" data-aos="fade-right">
        <div className="about-section-content px-4">
        <motion.h1
  className="mb-5 text-4xl font-bold text-transparent bg-clip-text gradient-animation bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  Hi, I am Thandeka Portia P Mazibuko
</motion.h1>
          <h2 className="mb-4 text-2xl font-semibold">
            Full Stack & Mobile Developer, based in South Africa
          </h2>

          {/* About Me Section */}
          <h3 className="text-2xl font-bold mt-6">About Me</h3>
          <p className="mb-4 text-lg">
            Hi! I’m a passionate ⭐⭐Full Stack Developer & Mobile Developer⭐⭐ with a strong focus on building ⭐⭐responsive, user-friendly, and scalable applications⭐⭐. I specialize in ⭐⭐React.js, React Native, Node.js, Firebase, and state management tools like Redux⭐⭐.
          </p>
          <p className="mb-4 text-lg">
            Over the years, I’ve worked on projects ranging from ⭐⭐e-commerce platforms and employee management systems to mobile apps and interactive games⭐⭐. I thrive in collaborative environments and continuously explore new technologies to stay ahead in the ever-evolving tech space.
          </p>

          {/* What I Do Section */}
          <h3 className="text-2xl font-bold mt-6">What I Do</h3>
          <ul className="mb-4 text-lg list-disc pl-6">
            <li>💻 ⭐⭐<span className='text-2xl'>Frontend Development</span>: React.js, Tailwind CSS, and Redux Toolkit for responsive UI.</li>
            <li>📱 ⭐⭐<span className='text-2xl'>Mobile Development</span>: React Native & Expo for cross-platform mobile apps.</li>
            <li>⚙️ ⭐⭐<span className='text-2xl'>Backend Development </span>: Node.js, Express.js, and Firebase for API development.</li>
            <li>🗄️ ⭐⭐<span className='text-2xl'>Database Management </span>: Firestore, MongoDB, and SQLite for structured data solutions.</li>
            <li>🔒 ⭐⭐<span className='text-2xl'>Authentication & Security </span>: JWT authentication, Firebase Auth, and role-based access.</li>
          </ul>

          <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
  <Link
    to="/work"
    className="btn btn-branding bg-[#B1C98D] hover:bg-lime-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
  >
    See my Projects
  </Link>
  {/* <Link
    to="/codetribe"
    className="btn btn-branding bg-[#B1C98D] hover:bg-lime-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
  >
    My CodeTribe Journey
  </Link> */}
  <Link
    to="/certifications"
    className="btn btn-branding bg-[#B1C98D] hover:bg-lime-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
  >
    My Certifications
  </Link>
</div>

        </div>
      </div>

        {/* Image Section */}
        <div className="hidden md:flex md:w-1/2 justify-center" data-aos="fade-left">
  <img
    src={Fullstack}
    alt="Thandeka Portia P Mazibuko"
    className="w-3/4 max-w-xs h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
  />
</div>
</div>

      {/* Skills & Expertise Section */}
      <div className="mt-12 skills-section" data-aos="fade-up">
        <h3 className="mb-6 text-3xl font-bold text-center">Skills & Expertise</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={index}
              className="skill-item p-4 rounded-lg shadow-md shadow-[#C087BF] transition duration-300 transform hover:scale-105 flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100} 
            >
              {skill.icon}
              <p className="text-center text-xl mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
