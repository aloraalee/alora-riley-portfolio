import JourneyLikeAGenius from '../assets/JourneyLikaAGenius.gif';
import HangInThere from '../assets/HangInThere.gif';
import Tracker from '../assets/Tracker.gif';
import './ProjectsContainer.css';

const ProjectsContainer = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <section className="project-container">
        <div className="single-project">
          <img src={JourneyLikeAGenius} alt="GIF of Journey Like a Genius Project" />
          <h3>Journey Like a Genius</h3>
          <p>This project is about ...</p>
          <a href="https://journeylikeagenius.netlify.app/">Deployed Site</a>
        </div>
        <div className="single-project">
          <img src={Tracker} alt="Image of Tracker" />
          <h3>Tracker</h3>
          <p>This project is about ...</p>
        </div>
        <div className="single-project">
          <img src="https://github.com/user-attachments/assets/e0ba0adb-f66b-4495-a161-7ea1ca2996fe" alt="Image of Little Shop project" />
          <h3>Little Shop</h3>
          <p>Merchant-Coupon management system built with a Ruby on Rails backend API and a vanilla JavaScript frontend. The app allows users to view merchants and their associated coupons, solving the problem of efficient coupon management and distribution for multiple merchants.</p>
          {/* <ul>
            <li><strong>Backend Development (Primary Focus):</strong> Built Coupon model with full CRUD, unique codes, and business rules (like a 5-coupon limit per merchant). Updated Invoice model for optional coupon association, adjusted tests, and set up seed data.</li>
            <br></br>
            <li><strong>Frontend Enhancements (Secondary Focus):</strong> Fetched and displayed coupon data, built dynamic UI updates, and toggled views between Merchants and Coupons.</li>
          </ul> */}
        </div>
        <div className="single-project">
          <img src="https://github.com/aloraalee/rancid-tomatillos/blob/main/New%20Recording%20-%2012_19_2024,%203_32_44%20PM-high.gif?raw=true" alt="Image of Rancid Tamatillos" />
          <h3>Rancid Tamatillos</h3>
          <p>Rotten Tomatillos is an app that allows users to browse through a collection of movie posters and vote for their favorite movies. Users can view a variety of movie posters, each linked to detailed movie information. By casting their votes, users contribute to ranking the movies based on popularity. </p>
        </div>
        <div className="single-project">
          <img src={HangInThere} alt="Image of Hang In There" />
          <h3>Hang In There</h3>
          <p>This project is about ...</p>
        </div>
      </section>
    </section>
  );
};

export default ProjectsContainer;
