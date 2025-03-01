import JourneyLikeAGenius from '../assets/JourneyLikaAGenius.gif';
import HangInThere from '../assets/HangInThere.gif';
import Tracker from '../assets/Tracker.gif';
import MusicFestival from '../assets/MusicFestival.gif';
import './ProjectsContainer.css';

const ProjectsContainer = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <section className="project-container">
        <div className="single-project">
          <img src={JourneyLikeAGenius} alt="GIF of Journey Like a Genius Project" />
          <h3>Journey Like a Genius</h3>
          <p>Journey Like a Genius is a full-stack travel planning application built with Ruby on Rails, React, and PostgreSQL. It generates personalized itineraries based on user preferences such as budget, group size, and activity type. The project leverages the Google Places API for dynamic location-based recommendations.
          <br></br>
          <br></br>
          My primary focus was on backend development, designing an efficient database schema with robust models and data validations. I implemented complex algorithms to match user preferences with curated destinations, enhancing the app's personalization capabilities. On the frontend, I built responsive React components for an intuitive user interface. Key challenges included optimizing API calls and ensuring seamless integration between the Rails backend and React frontend. This project significantly improved my skills in full-stack development, API integration, and algorithm design within a real-world application context..</p>
          <div className="project-buttons">
            <button className="project-btn">
              <a href="https://github.com/Crosswolfv1/journey_like_a_genius_fe.git"> FE Repo </a>
            </button>
            <button className="project-btn">
              <a href="https://github.com/Crosswolfv1/journey_like_a_genius.git"> BE Repo </a>
            </button>
            <button className="project-btn">
              <a href="https://journeylikeagenius.netlify.app/">Deployed Site</a>
            </button>
          </div>
        </div>
        <div className="single-project">
          <img src={Tracker} alt="Image of Tracker" />
          <h3>Tracker</h3>
          <p>Tracker is a collaborative job search management application initially developed by a team of 14 developers, with an additional group of 13 developers, including myself, joining the project two months later. This comprehensive tool streamlines the job hunting process by allowing users to track job applications, companies, and professional contacts.
          <br></br>
          <br></br>
          My primary contributions focused on improving code organization and enhancing user experience. I refactored fetch calls from contact components, moving them to a dedicated apiCalls file, which improved code maintainability and reusability. Additionally, I implemented conditional rendering of dashboard data to show only the most relevant information from the past week. I also collaborated on integrating practice interview questions for job applications using OpenAI, writing both the frontend code and Cypress tests to ensure robust functionality. These enhancements collectively improved the app's efficiency and user-friendliness in managing the complex job hunting process..</p>
          <div className="project-buttons">
            <button className="project-btn">
              <a href="https://github.com/turingschool/tracker-crm-fe.git"> FE Repo </a>
            </button>
            <button className="project-btn">
              <a href="https://github.com/turingschool/tracker-crm.git"> BE Repo </a>
            </button>
            <button className="project-btn">
              <a href="https://tracker-crm-fe-38f7cf1aaca5.herokuapp.com/">Deployed Site</a>
            </button>
          </div>
        </div>
        <div className="single-project">
          <img src="https://github.com/user-attachments/assets/e0ba0adb-f66b-4495-a161-7ea1ca2996fe" alt="Image of Little Shop project" />
          <h3>Little Shop</h3>
          <p>Merchant-Coupon management system built with a Ruby on Rails backend API and a vanilla JavaScript frontend. The app allows users to view merchants and their associated coupons, solving the problem of efficient coupon management and distribution for multiple merchants.
            <br></br>
            <br></br>
            My primary focus was on backend development, building a robust Coupon model with full CRUD functionality and business rules like a 5-coupon limit per merchant. I also updated the Invoice model and set up seed data. On the frontend, I enhanced the UI by fetching and displaying coupon data, implementing dynamic updates, and creating a toggle feature between Merchants and Coupons. This work strengthened my skills in API integration and state management.
          </p>
          <div className="project-buttons">
            <button className="project-btn">
              <a href="https://github.com/aloraalee/little-shop-fe-final-starter.git"> FE Repo </a>
            </button>
            <button className="project-btn">
              <a href="https://github.com/aloraalee/little-shop-be-final-starter.git"> BE Repo </a>
            </button>
          </div>
        </div>
        <div className="single-project">
          <img src="https://github.com/aloraalee/rancid-tomatillos/blob/main/New%20Recording%20-%2012_19_2024,%203_32_44%20PM-high.gif?raw=true" alt="Image of Rancid Tamatillos" />
          <h3>Rancid Tamatillos</h3>
          <p>Rancid Tomatillos is a React app built to let users browse movie posters and view detailed movie information. Users can vote for their favorite movies, contributing to their popularity rankings. This project strengthened my skills in React, JSX, and component-based architecture, while also using Cypress for end-to-end testing, HTML/CSS for styling, and Netlify for deployment.
          <br></br>
          <br></br>
          My primary focus was managing state with React hooks, implementing React Router for dynamic routing, and ensuring clean component organization. A major win was refactoring the home button functionality using conditional rendering, simplifying the code and improving maintainability. </p>
          <div className="project-buttons">
            <button className="project-btn">
                <a href="https://github.com/aloraalee/rancid-tomatillos.git"> Repo </a>
            </button>
          </div>
        </div>
        <div className="single-project">
          <img src={HangInThere} alt="Image of Hang In There" />
          <h3>Hang In There</h3>
          <p>Hang In There is a solo project built over 10 days during Module 2 of the Turing program, using JavaScript, HTML, and CSS. It’s a motivational poster generator that lets users create, view, and save personalized posters, including a humorous "unmotivational" section. This project strengthened my skills in JavaScript, DOM manipulation, and building interactive web apps.
          <br></br>
          <br></br>
          My primary focus was implementing dynamic DOM updates and writing clean, DRY code. A major win was creating the "unmotivational" section, while a key challenge was debugging the delete saved posters feature, which required careful troubleshooting and deeper understanding of array methods and event handling.</p>
          <div className="project-buttons">
            <button className="project-btn">
            <a href="https://github.com/aloraalee/hang-in-there.git"> Repo </a>
          </button>
          </div>
        </div>
        <div className="single-project">
          <img src={MusicFestival} alt="Image of Music Festival Schedules" />
          <h3>Music Festival Schedules</h3>
          <p>Music Festival Schedule Service is a solo project built in 16 hours using React and Ruby on Rails. It allows admins to view and manage music festival schedules, including viewing details, removing shows, and live-searching schedules. 
          <br></br>
          <br></br>
          I focused on implementing live search functionality, building reusable components, and ensuring a responsive design for various devices all while strengthing my understanding of RESTful architecture. Future plans could include enhancing user authentication and a show suggestion feature.</p>
          <div className="project-buttons">
            <button className="project-btn">
              <a href="https://github.com/aloraalee/music-festival-fe.git"> FE Repo </a>
            </button>
            <button className="project-btn">
              <a href="https://github.com/aloraalee/music-festival-be.git"> BE Repo </a>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectsContainer;
