import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as motion from "motion/react-client"

const Fullstack = require('../assets/Tpp.jpg');

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations with a duration of 1s
  }, []);

  return (
    <div className="container min-h-screen px-4 py-12 mx-auto about-section">
      <div className="flex flex-col items-center md:flex-row">
        {/* Text Section */}
        <div
          className="mb-8 md:w-1/2 md:mb-0"
          data-aos="fade-right" // AOS animation for the text section
        >
          <div className="about-section-content px-4">
            <h1 className="mb-5 text-4xl font-bold">
              Hi, I am Thandeka Portia P Mazibuko
            </h1>
            <h2 className="mb-4 text-2xl font-semibold">
              Full Stack Developer, based in South Africa
            </h2>
            <p className="mb-4 text-lg">
            Hi! I’m a passionate Full-Stack Developer with a strong focus on building responsive, user-friendly, and efficient web applications. With expertise in React.js, Node.js, Firebase, and modern state management tools like Redux, I enjoy crafting seamless user experiences from start to finish.

Over the years, I’ve worked on projects ranging from e-commerce platforms to weather apps and hotel booking systems, showcasing my ability to integrate front-end and back-end technologies to solve real-world problems.

I thrive in collaborative environments and am always eager to learn new tools and frameworks to stay ahead in the ever-evolving tech landscape. Whether it’s debugging a tricky issue or designing a scalable system, I’m committed to delivering high-quality solutions.
            </p>
            <Link
              to="/work"
              className="btn btn-branding bg-[#B1C98D] hover:bg-lime-700 text-white font-bold py-3 px-5 rounded transition duration-300 transform hover:scale-105"
            >
              See my Projects
            </Link>
            <Link
              to="/codetribe"
              className="btn btn-branding bg-[#B1C98D] hover:bg-lime-700 text-white font-bold py-3 px-5 ml-2 rounded transition duration-300 transform hover:scale-105"
            >
              My CodeTribe Journey
            </Link>
          </div>
        </div>

      {/* Image Section */}
<div
  className="md:w-1/2 flex justify-center"
  data-aos="fade-left" 
>
  <img
    src={Fullstack}
    alt="Thandeka Portia P Mazibuko"
    className="w-3/4 max-w-xs h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
  />
</div>
</div>

      {/* Skills & Expertise Section */}
      <div
        className="mt-12 skills-section"
        data-aos="fade-up" 
      >
        <h3 className="mb-6 text-3xl font-bold">Skills & Expertise</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {[
            'JavaScript (ES6+)',
            'React.js',
            'Node.js',
            'SQL & SQLite',
            'HTML & CSS',
            'Git & GitHub',
            'API Development',
            'Responsive Design',
            'Bootstrap',
            'Tailwind CSS',
            'Figma',
            'Firebase',
            'React Native',
            'Expo CLI',
          ].map((skill, index) => (
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
              key={index}
              className="skill-item p-4 rounded-lg shadow-md shadow-[#C087BF] transition duration-300 transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 300} // Adds a slight delay for each skill
            >
              <p className="text-center text-xl">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
