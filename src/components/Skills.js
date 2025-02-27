import './skills.css';
import {Ruby, Rails, RSPEC, Postman, ReactJS, JavaScript, HTML, CSS, Cypress, Git, GitHub, TypeScript, Heroku, Netlify, Figma, Miro, TailwindCSS, Slack } from '../components/icons';


const Skills = () => {

  return (
    <section id="skills">
      <h2>
        Skills
      </h2>
      <div className="icons">
        <section className="backend">
          <h3>
            Backend Languages and Frameworks:
          </h3>
          {<Ruby />}
          <h4>
            Ruby
          </h4>
          {<Rails />} 
          <h4>
            Rails
          </h4>
        </section>
        <section className="frontend">
          <h3>
            Frontend Languages and Frameworks:
          </h3>
          {<ReactJS />}
          <h4>
            ReactJS
          </h4>
          {<JavaScript />}
          <h4>
            JavaScript
          </h4>
          {<HTML />}
          <h4>
            HTML
          </h4>
          {<CSS />}
          <h4>
            CSS
          </h4>
          {<TypeScript/>}
          <h4>
            TypeScript
          </h4>
          {<TailwindCSS/>}
          <h4>
            TailwindCSS
          </h4>
        </section>
        <section className="testing-development">
          <h3>
            Testing and Development:
          </h3>
          {<RSPEC />}
          <h4>
            RSpec
          </h4>
          {<Cypress />}
          <h4>
            Cypress
          </h4>
        </section>
        <section className="workflow">
          <h3>
            Workflow:
          </h3>
          {<Git />}
          <h4>
            Git
          </h4>
          {<GitHub />}
          <h4>
            GitHub
          </h4>
        </section>
        <section className="tools">
          <h3>
            Tools:
          </h3>
          {<Postman />}
          <h4>
            Postman
          </h4>
          {<Netlify />}
          <h4>
            Netlify
          </h4>
          {<Heroku />}
          <h4>
            Heroku
          </h4>
          {<Miro />}
          <h4>
            Miro
          </h4>
          {<Figma />}
          <h4>
            Figma
          </h4>
          {<Slack />}
          <h4>
            Slack
          </h4>
        </section>
      </div>
    </section>
  )

}

export default Skills;