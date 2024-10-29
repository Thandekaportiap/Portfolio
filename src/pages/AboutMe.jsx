import React from 'react';
import { Link } from 'react-router-dom';

const Fullstack = require('../assets/fullstack.avif');

const AboutMe = () => {
  return (
    <div className="about-section container mx-auto px-4 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row items-center">
        
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="about-section-content">
            <h1 className="text-4xl font-bold mb-5">
              Hi, I am Thandeka Portia P Mazibuko
            </h1>
            <h2 className="text-2xl font-semibold mb-4">
              Full Stack Developer, based in South Africa
            </h2>
            <p className="text-lg mb-4">
              I'm passionate about creating visually appealing and user-friendly web experiences.
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
      <div className="skills-section mt-12">
        <h3 className="text-3xl font-bold mb-6">Skills & Expertise</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
