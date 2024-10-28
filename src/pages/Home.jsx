import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center font-fira">
      <div className="text-center">
        <p className="text-2xl">Hello, I am</p>
        <h1 className="text-5xl font-bold mt-6">Thandeka Portia P Mazibuko</h1>
        <h2 className="text-2xl mb-3 mt-6">
          Fullstack Developer based in South Africa
        </h2>
        <div className="mt-10">
          <Link to="/contact" 
            className="btn bg-[#B1C98D] hover:bg-lime-700 text-neutral-900 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <a href="#about-me" className="absolute bottom-8 text-xl mt-80">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="lightcoral"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce mx-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1716 29.1716C22.7337 27.6095 25.2663 27.6095 26.8284 29.1716L40 42.3431L53.1716 29.1716C54.7337 27.6095 57.2663 27.6095 58.8284 29.1716C60.3905 30.7337 60.3905 33.2663 58.8284 34.8284L42.8284 50.8284C41.2663 52.3905 38.7337 52.3905 37.1716 50.8284L21.1716 34.8284C19.6095 33.2663 19.6095 30.7337 21.1716 29.1716Z"
            fill="#FFFFFF"
          />
        </svg>
      </a>
    </section>
  );
};

export default Home;
