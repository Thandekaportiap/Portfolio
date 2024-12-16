import React from 'react';
import { Link } from 'react-router-dom';

const Fullstack = require('../assets/Tpp.jpg');

const AboutMe = () => {
  return (
    <div className="container min-h-screen px-4 py-12 mx-auto about-section">
      <div className="flex flex-col items-center md:flex-row">
        
        {/* Text Section */}
        <div className="mb-8 md:w-1/2 md:mb-0">
          <div className="about-section-content">
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
            <Link to="/work"
              
              className="btn btn-branding bg-[#B1C98D] hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
            >
              See my Projects
            </Link>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={Fullstack}
            alt="Thandeka Portia P Mazibuko"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Skills & Expertise Section */}
      <div className="mt-12 skills-section">
        <h3 className="mb-6 text-3xl font-bold">Skills & Expertise</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>JavaScript (ES6+)</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>React.js</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>Node.js</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>SQL & SQLite</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>HTML & CSS</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>Git & GitHub</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>API Development</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>Responsive Design</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>Bootstrap</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>Tailwind CSS</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>Figma</p>
          </div>
          <div className="skill-item  p-4 rounded-lg  shadow-md shadow-[#C087BF]">
            <p>FireBase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
