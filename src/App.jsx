import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NoPage from './pages/NoPage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/ContactMe';
import Work from './pages/Work';
import Footer from './components/Footer';
import Codetribe from './pages/Codetribe';
import Mobilework from './pages/Mobilework';
import Certifications from './components/Certifications';
import './App.css'

function App() {
 

  return (
    <>
        <BrowserRouter>
        <div className=' bg-slate-700 text-[#C087BF] '>
          <NavBar  />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/codetribe" element={<Codetribe/>} />
            <Route path="/mobilework" element={<Mobilework/>} />
            <Route path="/certifications" element={<Certifications/>} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
     </>
  )
}

export default App
