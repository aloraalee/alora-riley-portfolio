import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectsContainer from './components/ProjectsContainer';
import Education from './components/Education';
import Contact from './components/Contact';

import './App.css';

function App() {
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
        <Education/>
        <Contact/>
      </div>
  );
}

export default App;
