import './skills.css';
import {Ruby, Rails, RSPEC, Postman, ReactJS, JavaScript, HTML, CSS, Cypress, Git, GitHub, JSON, Slack, Heroku, Netlify, Jira, Figma, Miro } from '../components/icons';


const Skills = () => {

  return (
    <section id="skills">
      <h2>
        Skills Go Here
      </h2>
      <div className="icons">
        <section className="languages-frameworks">
          <h3>
            Languages and Frameworks
          </h3>
          {<Ruby />}
          {<Rails />} 
          Active Record
          SQL
          {<ReactJS />}
          {<JavaScript />}
          {<HTML />}
          {<CSS />}
          TypeScript
        </section>
        <section className="testing-development">
          <h3>
            Testing and Development
          </h3>
          {<RSPEC />}
          {<Cypress />}
        </section>
        <section className="tools-workflow">
          <h3>
            Tools and Workflow:
          </h3>
          {<Git />}
          {<GitHub />}
          {<Postman />}
          Postico
          {<Netlify />}
          {<Heroku />}
          {<Miro />}
          Jira
          {<Figma />}
        </section>
      </div>
    </section>
  )

}

export default Skills;