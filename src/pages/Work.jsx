import React from 'react';

const projects = [
  {
    title: 'Hotel Booking App',
    description:
      'A feature-rich hotel booking application built with React.js, Redux, and Firebase. This app enables administrators to manage accommodations and bookings while allowing customers to browse, book rooms, and make secure payments.',
    stack: 'React.js, Tailwind CSS, Redux, Firebase',
    image: require('../assets/hotel app.png'),
    alt: 'Hotel Booking App',
    link: 'https://hotel-app-alpha.vercel.app/',
  },
  {
    title: 'Snap Landing Page',
    description:
      'Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.',
    stack: 'HTML, CSS, JavaScript',
    image: require('../assets/desktop-design (2).jpg'),
    alt: 'Snap Landing Page',
    link: 'https://dropdownsection.netlify.app/',
  },
  {
    title: 'Weather App',
    description:
      'A dynamic weather application developed using HTML, CSS, JavaScript and integrated with the SheCodes Weather API. This app allows users to search for real-time weather updates and 5-day forecasts for any location worldwide.',
    stack: 'HTML, CSS, JavaScript',
    image: require('../assets/react-weather-app-screenshot.png'),
    alt: 'Weather App',
    link: 'https://weatherappbytpp.netlify.app/',
  },
  {
    title: 'Todo List App',
    description:
      'User-friendly application designed to help you manage your tasks efficiently. Easily create, edit, and delete tasks.',
    stack: 'React.js, Tailwind CSS, SQLite, Express',
    image: require('../assets/todoApp.png'),
    alt: 'Todo App',
    link: 'https://to-do-list-app-wpzq.vercel.app/',
  },
  {
    title: 'Recipe App',
    description:
      'A user-friendly recipe app that allows users to browse, save, and share recipes. It features a searchable database, personalized collections, and detailed cooking instructions with nutritional info.',
    stack: 'React.js, Tailwind CSS, JSON Server',
    image: require('../assets/download.png'),
    alt: 'Recipe App',
    link: 'https://task-9-online-recipe.vercel.app/',
  },
  {
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
  return (
    <div className="container px-4 py-12 mx-auto">
      <p className="mb-12 text-3xl font-semibold text-center">My Projects</p>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          <div className="hidden md:w-1/2 md:block">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="p-2 mt-8 text-center md:w-1/2 md:text-left md:mt-0">
            <h2 className="mb-5 text-3xl font-bold">{project.title}</h2>
            <p className="mb-5 text-lg">{project.description}</p>
            <a
              href={project.link}
              className="btn btn-branding-outline bg-transparent border border-[#B1C98D] hover:bg-[#B1C98D] text-[#B1C98D] hover:text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Learn More
            </a>
            <p className="my-8">Built with {project.stack}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
