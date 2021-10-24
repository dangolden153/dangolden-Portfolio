import React from "react";
import Slide from "react-reveal/Slide";

class Skills extends React.Component {
  render() {
    return (
      <div id="skills" className="skillBg backgroundFix">
        <div className="skillsWrapper container">
          <Slide right>
            <header className="centered">
              <div>
                <h1>
                  My <span className="accent">Skills</span>
                  <span className="primary">.</span>
                </h1>
                <p className="descText">
                  Here's a list of the tools, languages and frameworks I use for
                  development. Constantly learning new things, improving and
                  staying up-to-date.
                </p>
              </div>
            </header>
          </Slide>
          <Slide bottom>
            <div className="skillsContainer">
              <div className="skills">
                <span className="icon-colours"></span>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind CSS</li>
                  <li>Semantic UI</li>
                  <li>UI/UX</li>
                </ul>
              </div>
              <div className="skills">
                <span className="icon-code"></span>
                <ul>
                  <li>JavaScript</li>
                  <li>React.Js</li>
                  <li>React Native</li>
                  <li>Next.Js</li>
                  <li>Redux</li>
                </ul>
              </div>
              <div className="skills">
                <span className="icon-database"></span>
                <ul>
                  <li>Node JS</li>
                  <li>Mongo DB</li>
                  <li>Express JS</li>
                  <li>Firebase#</li>
                  <li>Aws</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Skills;
