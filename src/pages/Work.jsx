import React from 'react'

const sneakersImg = require('../assets/desktop-design.jpg');
const snapLandingImg = require('../assets/desktop-design (2).jpg');
const weatherAppImg = require('../assets/react-weather-app-screenshot.png');
const todoAppImg = require('../assets/todoApp.png');

const Work = () => {
  return (
    <div className="container mx-auto px-4 py-12">
    <p className="text-center text-3xl font-semibold mb-12">My Projects</p>

    {/* Sneakers Shop Project */}
    <div className="mb-12 flex flex-col md:flex-row items-center m-2">
      <div className="md:w-1/2 hidden md:block">
        <img src={sneakersImg} alt="Sneakers Shop" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 ml-4 p-2">
        <div className="project-description">
          <h2 className="text-3xl font-bold mb-5">Sneakers Shop</h2>
          <p className="text-lg mb-5">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <a
            href="https://ecommbyaa.netlify.app/"
            className="btn btn-branding-outline bg-transparent border border-[#B1C98D] hover:bg-[#B1C98D] text-[#B1C98D] hover:text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Learn More
          </a>
        </div>
        <p className="my-8">Built with HTML, CSS, and JavaScript</p>
      </div>
    </div>

    {/* Snap Landing Page Project */}
    <div className="mb-12 flex flex-col md:flex-row items-center ">
      <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
        <div className="project-description">
          <h2 className="text-3xl font-bold mb-5">Snap Landing Page</h2>
          <p className="text-lg mb-5">
            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
          </p>
          <a
            href="https://dropdownsection.netlify.app/"
            className="btn btn-branding-outline bg-transparent border border-[#B1C98D] hover:bg-[#B1C98D] text-[#B1C98D] hover:text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Learn More
          </a>
        </div>
        <p className="my-8">Built with HTML, CSS, and JavaScript</p>
      </div>
      <div className="md:w-1/2 hidden md:block order-1 md:order-2">
        <img src={snapLandingImg} alt="Snap Landing Page" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>

    {/* Weather App Project */}
    <div className="flex flex-col md:flex-row items-center m-2">
      <div className="md:w-1/2 hidden md:block">
        <img src={weatherAppImg} alt="Weather App" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 ml-4 p-2">
        <div className="project-description">
          <h2 className="text-3xl font-bold mb-5">Weather App</h2>
          <p className="text-lg mb-5">
            Far, far away, behind the word mountains, far from the countries Vokalia and Consonantia, live the blind texts. Separated, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <a
            href="https://weatherappbytpp.netlify.app/"
            className="btn btn-branding-outline bg-transparent border border-[#B1C98D] hover:bg-[#B1C98D] text-[#B1C98D] hover:text-white font-semibold py-2 px-4 rounded transition-colors mb-4"
          >
            Learn More
          </a>
        </div>
        <p className="my-8">Built with HTML, CSS, and JavaScript</p>
      </div>
    </div>
    {/* Todo App Project */}
    <div className="flex flex-col md:flex-row items-center m-2">
      <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
        <img src={todoAppImg} alt="todo App" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 ml-4 p-2">
        <div className="project-description">
          <h2 className="text-3xl font-bold mb-5">Todo List App</h2>
          <p className="text-lg mb-5">
          User-friendly application designed to help you manage your tasks efficiently. With a clean and intuitive interface, you can easily create, edit, and delete tasks, ensuring that you stay organized and productive.
          </p>
          <a
            href="https://to-do-list-app-wpzq.vercel.app/"
            className="btn btn-branding-outline bg-transparent border border-[#B1C98D] hover:bg-[#B1C98D] text-[#B1C98D] hover:text-white font-semibold py-2 px-4 rounded transition-colors mb-4"
          >
            Learn More
          </a>
        </div>
        <p className="my-8">Built with Raact JS, Tailwind CSS, Sqlite and Express</p>
      </div>
     
    </div>
  </div>
);
};


export default Work
