import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center font-fira">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="text-2xl">Hello, I am</p>
        <motion.h1
          className="text-5xl font-bold mt-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Thandeka Portia P Mazibuko
        </motion.h1>
        <motion.h2
          className="text-2xl mb-3 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Full Stack & Mobile Developer, based in South Africa
        </motion.h2>
        <motion.div
          className="mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Link
            to="/contact"
            className="btn bg-[#B1C98D] hover:bg-lime-700 text-neutral-900 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      <Link to="/about" className="absolute bottom-8 text-xl mt-80">
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
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
        </motion.svg>
      </Link>
    </section>
  );
};

export default Home;
