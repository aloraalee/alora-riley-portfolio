import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectsContainer from './components/ProjectsContainer';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1)); 
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <img className="portfolio-photo" src="/Portfolio-photo.png" alt="Photo of Alora Riley"/>
            <h1>
              Hello, I'm <span style={{color: "#FF99C7"}}>Alora</span>.
            </h1>
            <h2>
              Software Engineer
            </h2>
            <div class="social-links">
              <a
                href="https://github.com/aloraalee"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub size={50} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/alorariley/"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin size={50} aria-hidden="true" />
              </a>
            </div>
        </header>
        <AboutMe/>
        <ProjectsContainer/>
        <Skills/>
        <Education/>
        <Contact/>
      </div>
  );
}

export default App;
