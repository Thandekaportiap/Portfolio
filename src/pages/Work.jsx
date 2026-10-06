import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, increment, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../components/Firebase';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { viewport, slideIn, stagger, popIn } from '../components/animations';

const projects = [
  {
    id: 'hotel-app',
    title: 'Hotel Booking App',
    description:
      'A feature-rich hotel booking application built with React.js, Redux, and Firebase. This app enables administrators to manage accommodations and bookings while allowing customers to browse, book rooms, and make secure payments.',
    stack: 'React.js, Tailwind CSS, Redux, Firebase',
    image: require('../assets/hotel app.png'),
    alt: 'Hotel Booking App',
    link: 'https://hotel-app-alpha.vercel.app/',
  },
  {
    id: 'snap-landing-page',
    title: 'Snap Landing Page',
    description:
      'Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.',
    stack: 'HTML, CSS, JavaScript',
    image: require('../assets/desktop-design (2).jpg'),
    alt: 'Snap Landing Page',
    link: 'https://dropdownsection.netlify.app/',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description:
      'A dynamic weather application developed using HTML, CSS, JavaScript and integrated with the SheCodes Weather API. This app allows users to search for real-time weather updates and 5-day forecasts for any location worldwide.',
    stack: 'HTML, CSS, JavaScript',
    image: require('../assets/react-weather-app-screenshot.png'),
    alt: 'Weather App',
    link: 'https://weatherappbytpp.netlify.app/',
  },
  {
    id: 'todo-list-app',
    title: 'Todo List App',
    description:
      'User-friendly application designed to help you manage your tasks efficiently. Easily create, edit, and delete tasks.',
    stack: 'React.js, Tailwind CSS, SQLite, Express',
    image: require('../assets/todoApp.png'),
    alt: 'Todo App',
    link: 'https://to-do-list-app-wpzq.vercel.app/',
  },
  {
      id: 'recipe-app',
    title: 'Recipe App',
    description:
      'A user-friendly recipe app that allows users to browse, save, and share recipes. It features a searchable database, personalized collections, and detailed cooking instructions with nutritional info.',
    stack: 'React.js, Tailwind CSS, JSON Server',
    image: require('../assets/download.png'),
    alt: 'Recipe App',
    link: 'https://task-9-online-recipe.vercel.app/',
  },
  {
    id: 'shop-easy',
    title: 'Shop-easy',
    description:
      'A powerful e-commerce platform with features like product management, user authentication, secure payments, and cart functionality.',
    stack: 'React.js, Tailwind CSS, Redux, Firebase SDK, Node.js, Express, Stripe',
    image: require('../assets/shopeasy.io.png'),
    alt: 'Shop-easy',
    link: 'https://shopeasy-io.vercel.app/',
  },
  {
    id: 'card-guessing-game',
    title: 'Card Guessing Game',
    description:
      'An interactive memory game where players flip cards to find matching pairs. Built with Node.js and EJS for dynamic rendering.',
    stack: 'Node.js, Express.js, EJS, JavaScript, CSS',
    image: require('../assets/card-game.png'),
    alt: 'Card Guessing Game',
    link: 'https://task-16-guessing-game.onrender.com/',
},
{
  id: 'shopping-list-app',
  title: 'Shopping List App',
  description:
    'A feature-rich shopping list application with CRUD functionality, search and filter options, multiple list support, and offline access.',
  stack: 'React.js, Redux, Tailwind CSS, JSON Server',
  image: require('../assets/shopping-list.png'),
  alt: 'Shopping List App',
  link: 'https://shopping-list-gray-theta.vercel.app/',
},
{
  id: 'react-weather-app',
  title: 'React Weather App',
  description:
    'A modern weather application that provides real-time weather updates, forecasts, and temperature details using OpenWeather API.',
  stack: 'React.js, Tailwind CSS, OpenWeather API',
  image: require('../assets/react-weather.png'),
  alt: 'Weather App',
  link: 'https://react-weather-app-swart-chi.vercel.app/',
},

{
  id: 'roots-and-fade-studio',
  title: 'Roots & Fade Studio',
  description:
    'A full-featured website for a fictional barber-and-braid studio, built as a junior full-stack practical assessment. Features a complete booking system with live availability, Google and Apple Calendar integration tied to the exact appointment selected, a promo popup, and full Terms and Conditions.',
  stack: 'React.js, Vite',
  image: require('../assets/root-and-fade.png'),
  alt: 'Roots & Fade Studio',
  link: 'https://roots-and-fade.vercel.app/',
},

];

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const fetchData = async () => {
      for (let project of projects) {
        const docRef = doc(db, 'projects', project.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setLikes((prev) => ({ ...prev, [project.id]: data.likes || 0 }));
          setComments((prev) => ({ ...prev, [project.id]: data.comments || [] }));
        }
      }
    };
    fetchData();
  }, []);

  const handleLike = async (projectId) => {
    const docRef = doc(db, 'projects', projectId);
    await updateDoc(docRef, { likes: increment(1) });
    setLikes((prev) => ({ ...prev, [projectId]: (prev[projectId] || 0) + 1 }));
  };

  const handleComment = async (projectId) => {
    if (!newComment.trim()) return;
    const docRef = doc(db, 'projects', projectId);
    const projectDoc = await getDoc(docRef);
    const projectData = projectDoc.exists() ? projectDoc.data() : {};
    const updatedComments = [...(projectData.comments || []), newComment];
    await setDoc(docRef, { ...projectData, comments: updatedComments });
    setComments((prev) => ({ ...prev, [projectId]: updatedComments }));
    setNewComment('');
  };

 return (
  <div className="container px-4 py-12 mx-auto">
    {/* Scroll progress bar */}
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#B1C98D] origin-left z-50"
      style={{ scaleX: progress }}
    />

    {projects.map((project, index) => (
      <motion.div
        key={project.id}
        className={`flex flex-col items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        variants={slideIn(index % 2 === 0 ? 'left' : 'right')}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {/* Image with zoom-on-hover inside a clipped frame */}
        <div className="hidden md:w-1/2 md:block overflow-hidden rounded-lg shadow-lg">
          <motion.img
            src={project.image}
            alt={project.alt}
            className="w-full h-auto"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="p-4 mt-8 text-center md:w-1/2 md:text-left md:mt-0">
          <h2 className="mb-5 text-3xl font-bold">{project.title}</h2>
          <p className="mb-5 text-lg">{project.description}</p>

          {/* Tech stack as animated chips instead of plain text */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center md:justify-start my-6"
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {project.stack.split(', ').map((tech) => (
              <motion.span
                key={tech}
                variants={popIn}
                className="px-3 py-1 text-sm rounded-full border border-[#B1C98D] text-[#B1C98D]"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn border border-[#B1C98D] hover:bg-[#B1C98D] text-[#B1C98D] hover:text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Learn More
            </motion.a>

            {/* Like button with heart pop and counter flip */}
            <motion.button
              onClick={() => handleLike(project.id)}
              whileTap={{ scale: 0.9 }}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <motion.span
                key={likes[project.id] || 0}
                initial={{ scale: 1.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="mr-2"
              >
                ❤️
              </motion.span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={likes[project.id] || 0}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                >
                  {likes[project.id] || 0}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
};
export default Work;
