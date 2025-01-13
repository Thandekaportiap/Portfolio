import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, increment, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../components/Firebase';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <p className="mb-12 text-3xl font-semibold text-center">My Projects</p>
    {projects.map((project, index) => (
      <div
        key={project.id}
        className={`flex flex-col items-center mb-12 ${
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
      >
        <div className="hidden md:w-1/2 md:block">
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-auto rounded-lg shadow-lg"
            data-aos="zoom-in"
          />
        </div>
        <div className="p-4 mt-8 text-center md:w-1/2 md:text-left md:mt-0">
          <h2 className="mb-5 text-3xl font-bold">{project.title}</h2>
          <p className="mb-5 text-lg">{project.description}</p>
          <a
            href={project.link}
            className="btn btn-branding-outline bg-transparent border border-[#B1C98D] hover:bg-[#B1C98D] text-[#B1C98D] hover:text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Learn More
          </a>
          <p className="my-8">Built with {project.stack}</p>
          <div className="flex items-center gap-4">
          <div>
  <button
    onClick={() => handleLike(project.id)}
    className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
    Like ({likes[project.id] || 0})
  </button>
</div>


           
          </div>
        </div>
      </div>
    ))}
  </div>
);
};
export default Work;
