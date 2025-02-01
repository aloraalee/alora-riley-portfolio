import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectsContainer from './components/ProjectsContainer';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
          <h1>
            Alora Riley
          </h1>
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
