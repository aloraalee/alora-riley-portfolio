import JourneyLikeAGenius from '../assets/JourneyLikaAGenius.gif';
import './ProjectsContainer.css';

const ProjectsContainer = () => {

  return (
    <section id="projects">
      <h2>
        Projects
      </h2>
      <section className="project-container">
        <div classname="single-project">
          <img src={JourneyLikeAGenius} alt="GIF of Journey Like a Genius Project" />
          <h3>
            Journey Like a Genius
          </h3>
          <p>
            This project is about ...
          </p>
        </div>
      </section>
    </section>
  )

}

export default ProjectsContainer;