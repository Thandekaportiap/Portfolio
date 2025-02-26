import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const projects = [
  {
    id: "birthday-card",
    title: "Birthday Card App",
    description:
      "A simple mobile app built with React Native and Expo that allows users to create and send personalized birthday cards.",
    stack: "React Native, Expo",
    images: [
      require("../assets/Screenshot (1).png"),
      // require("../assets/hotel app.png"),
    ],
    link: "https://github.com/Thandekaportiap/BirthdayCardApp",
  },
  {
    id: "audio-recorder",
    title: "Audio Recorder with Auth",
    description:
      "An audio recording mobile app that includes authentication and Firebase storage for saving recordings.",
    stack: "React Native, Expo, Firebase Auth, Firestore",
    images: [
      require("../assets/Audio1.jpg"),
      require("../assets/Audio2.jpg"),
      require("../assets/Audio3.jpg"),
    ],
    link: "https://github.com/Thandekaportiap/Recorder-Auth",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A React Native weather app that fetches real-time weather data using the OpenWeather API.",
    stack: "React Native, Expo, OpenWeather API",
    images: [
      require("../assets/Weather1.jpg"),
      require("../assets/Weather2.jpg"),
      require("../assets/Weather3.jpg"),
      require("../assets/Weather4.jpg"),
      require("../assets/Weather5.jpg"),
    ],
    link: "https://github.com/Thandekaportiap/Mobile-Weather-App",
  },
  {
    id: "mobile-shopping",
    title: "Mobile Shopping App",
    description:
      "A mobile shopping app featuring authentication, Redux for state management, and AsyncStorage for persistent cart data.",
    stack: "React Native, Expo, Redux, AsyncStorage",
    images: [
      require("../assets/Shop1.jpg"),
      require("../assets/Shop2.jpg"),
      require("../assets/Shop3.jpg"),
      require("../assets/Shop4.jpg"),
      require("../assets/Shop5.jpg"),
    ],
    link: "https://github.com/Thandekaportiap/Mobile-Shopping-List-App",
  },
  {
    id: "restaurant-reservation",
    title: "Restaurant Reservation App with Admin Dashboard",
    description:
      "A full-stack restaurant reservation platform allowing users to book tables and administrators to manage reservations, view analytics, and update restaurant details.",
    stack:
      "React Native, Expo, Node.js, MongoDB, Firebase Notifications, Payment Gateway",
    images: [
      require("../assets/Restaurant1.jpg"),
      require("../assets/Restaurant2.jpg"),
      require("../assets/Restaurant3.jpg"),
      require("../assets/Restaurant4.jpg"),
    ],
    link: "https://github.com/Thandekaportiap/RestaurantReservationApp",
  },
];

const Mobilework = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container px-4 py-12 mx-auto">
    <p className="mb-12 text-2xl sm:text-3xl font-semibold text-center">
      My Mobile Projects
    </p>
    {projects.map((project, index) => (
      <div
        key={project.id}
        className={`flex flex-col lg:flex-row items-center mb-12 ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      >
        <div className="w-full lg:w-1/2">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="rounded-lg shadow-lg"
            breakpoints={{
              320: {
                slidesPerView: 1,  // 1 image per slide on small screens
                spaceBetween: 10,  // Small space between images
              },
              768: {
                slidesPerView: 2,  // 2 images per slide on medium screens
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,  // 3 images per slide on large screens
                spaceBetween: 30,
              },
            }}
          >
            {project.images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={image}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="p-4 mt-6 lg:mt-0 lg:w-1/2 text-center lg:text-left">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold">
            {project.title}
          </h2>
          <p className="mb-4 text-base sm:text-lg">{project.description}</p>
          <a
            href={project.link}
            className="inline-block bg-transparent border border-[#B1C98D] hover:bg-[#B1C98D] text-[#B1C98D] hover:text-white font-semibold py-2 px-4 rounded transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <p className="mt-6 text-sm sm:text-base">Built with {project.stack}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Mobilework;
