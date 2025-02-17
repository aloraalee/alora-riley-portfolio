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
          <a href="https://journeylikeagenius.netlify.app/">
            Deployed Site 
          </a>
        </div>
        <div classname="single-project">
          <img src="" alt="Image of Tracker" />
          <h3>
            Tracker
          </h3>
          <p>
            This project is about ...
          </p>
        </div>
        <div classname="single-project">
          <img src="" alt="Image of Little Shop" />
          <h3>
            Little Shop
          </h3>
          <p>
            This project is about ...
          </p>
        </div>
        <div classname="single-project">
          <img src="" alt="Image of Rancid Tamatillos" />
          <h3>
            Rancid Tamatillos
          </h3>
          <p>
            This project is about ...
          </p>
        </div>
        <div classname="single-project">
          <img src="" alt="Image of Hang In There" />
          <h3>
            Hang In There
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