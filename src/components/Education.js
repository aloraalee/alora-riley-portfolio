import './Education.css';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        <section className="education-item">
          <h3>Turing School of Software & Design</h3>
          <h4>Accredited Full-Stack Engineering Certificate | Expected March 2025</h4>
          <p>1500+ hours, 7-month intensive ACCET-accredited software development program.</p>
          <ul>
            <li>Focused on <strong>React, Ruby on Rails, PostgreSQL</strong>, and modern web development</li>
            <li>Developed full-stack applications using <strong>test-driven development, API integrations</strong>, and agile methodologies</li>
            <li><strong>Student Leadership Community Representative</strong>: Led weekly retrospectives to enhance student experience and communication</li>
          </ul>
        </section>
        <section className="education-item">
          <h3>University of Colorado Boulder</h3>
          <h4>Bachelor of Arts in Economics, Minor in French | December 2016</h4>
          <ul>
            <li><strong>Senior Thesis:</strong> Analyzed data and identified a statistically significant correlation between higher income levels and increased participation in open-choice schooling in Denver.</li>
            <li><strong>Biodiesel Club:</strong> Taught elementary students about renewable energy.</li>
            <li><strong>Club Ultimate Frisbee:</strong> Competed in regional tournaments and built teamwork skills.</li>
          </ul>
        </section>
        <section className="education-item">
          <h3>Sciences Po, Paris</h3>
          <h4>Certificate in Social Sciences and Humanities, Economics | 2014 - 2015</h4>
          <ul>
            <li>Studied abroad in Paris, focusing on the intersection of economics and social sciences.</li>
            <li>Member of the rowing team.</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Education;
