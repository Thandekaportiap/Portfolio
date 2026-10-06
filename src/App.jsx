
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import NoPage from './pages/NoPage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/ContactMe';
import Work from './pages/Work';
import Footer from './components/Footer';
import Codetribe from './pages/Codetribe';
import Mobilework from './pages/Mobilework';
import Certifications from './components/Certifications';

import './App.css';


// Page transition wrapper
const PageWrap = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);


// Animated routes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <PageWrap>
              <HomePage />
            </PageWrap>
          }
        />

        <Route
          index
          element={
            <PageWrap>
              <HomePage />
            </PageWrap>
          }
        />

        <Route
          path="/about"
          element={
            <PageWrap>
              <AboutMe />
            </PageWrap>
          }
        />

        <Route
          path="/contact"
          element={
            <PageWrap>
              <Contact />
            </PageWrap>
          }
        />

        <Route
          path="/work"
          element={
            <PageWrap>
              <Work />
            </PageWrap>
          }
        />

        <Route
          path="/codetribe"
          element={
            <PageWrap>
              <Codetribe />
            </PageWrap>
          }
        />

        <Route
          path="/mobilework"
          element={
            <PageWrap>
              <Mobilework />
            </PageWrap>
          }
        />

        <Route
          path="/certifications"
          element={
            <PageWrap>
              <Certifications />
            </PageWrap>
          }
        />

        <Route
          path="*"
          element={
            <PageWrap>
              <NoPage />
            </PageWrap>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-700 text-[#C087BF]">

        <NavBar />

        <AnimatedRoutes />

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
