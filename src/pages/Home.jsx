import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const roles = ['Full Stack Developer', 'Mobile Developer', 'React & React Native'];

// Stagger container + child for the name
const nameContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } },
};
const letter = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', damping: 14, stiffness: 120 },
  },
};

const AnimatedName = ({ text }) => (
  <motion.h1
    className="text-4xl sm:text-5xl font-bold mt-6 flex flex-wrap justify-center"
    variants={nameContainer}
    initial="hidden"
    animate="show"
    aria-label={text}
  >
    {text.split(' ').map((word, wi) => (
      <span key={wi} className="inline-flex mr-3" aria-hidden="true">
        {word.split('').map((char, ci) => (
          <motion.span key={ci} variants={letter} className="inline-block">
            {char}
          </motion.span>
        ))}
      </span>
    ))}
  </motion.h1>
);

// Typewriter that cycles through roles
const useTypewriter = (words, speed = 70, pause = 1500) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setDeleting(true);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      !deleting && text === current ? pause : deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
};

const Home = () => {
  const reduce = useReducedMotion();
  const role = useTypewriter(roles);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center font-fira overflow-hidden">
      {/* Floating background blobs */}
      {!reduce && (
        <>
          <motion.div
            className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#B1C98D]/20 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-400/10 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -60, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="relative text-center px-4">
        <motion.p
          className="text-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I am
        </motion.p>

        <AnimatedName text="Thandeka Portia P Mazibuko" />

        {/* Typewriter role */}
        <motion.h2
          className="text-xl sm:text-2xl mb-3 mt-6 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <span className="text-[#B1C98D]">{role}</span>
          <motion.span
            className="inline-block w-[2px] h-6 bg-[#B1C98D] ml-1 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
          />
          <span className="block text-base text-neutral-400 mt-2">based in South Africa</span>
        </motion.h2>

        <motion.div
          className="mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Link
              to="/contact"
              className="btn bg-[#B1C98D] hover:bg-lime-700 text-neutral-900 font-bold py-4 px-8 rounded-lg shadow-lg transition-colors duration-300 inline-block"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <Link to="/about" className="absolute bottom-8" aria-label="Go to About page">
        <motion.svg
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, 12, 0] }}
          transition={{
            opacity: { duration: 1.5, delay: 2.5 },
            y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 2.5 },
          }}
          whileHover={{ scale: 1.2 }}
          width="80"
          height="80"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
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