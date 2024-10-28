import React from 'react';

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
            <a
              href="#"
              className="btn btn-branding bg-[#B1C98D] hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
            >
              See my Projects
            </a>
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
          <div className="skill-item bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p>JavaScript (ES6+)</p>
          </div>
          <div className="skill-item bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p>React.js</p>
          </div>
          <div className="skill-item bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p>Node.js</p>
          </div>
          <div className="skill-item bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p>SQL & SQLite</p>
          </div>
          <div className="skill-item bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p>HTML & CSS</p>
          </div>
          <div className="skill-item bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p>Git & GitHub</p>
          </div>
          <div className="skill-item bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p>API Development</p>
          </div>
          <div className="skill-item bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow">
            <p>Responsive Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
