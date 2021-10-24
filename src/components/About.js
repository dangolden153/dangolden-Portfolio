import React from "react";
import { scrollToView } from "./NavBar";
import Slide from "react-reveal/Slide";

class About extends React.Component {
  render() {
    return (
      <Slide bottom>
        <div id="about" className="aboutMeWrapper">
          <div className="aboutMeDesc">
            <header>
              <h1>
                About <span className="accent">Me</span>
                <span className="primary">.</span>
              </h1>
            </header>
            <div className="descTextCont">
              <p className="descText">
                I'm a <span className="primary">Full-Stack</span> developer with
                a strong sense for aesthetics and interaction.
              </p>
              <p className="descText">
                Hello Before talking about qualifications and professional
                abilities,I would like to introduce myself. I am Daniel also
                known as <span className="primary">Dangolden.</span> Taking Web
                & App development as a profession not only fulfills my{" "}
                <span className="primary">pocket</span> but also my heart
                because it has been my
                <span className="primary"> passion</span> since my early
                teenage.I believe that people should do things in which they are
                good at or in which their{" "}
                <span className="primary">heart lays.</span> That’s why I chose{" "}
                <span className="primary">Software development </span>as my{" "}
                <span className="primary">career</span> because I believe I’m
                good at this and mas I am always honest and
                <span className="primary"> I am never afraid </span>.
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  window.open("./files/cv.pdf");
                }}
              >
                Download CV
              </button>
              <button onClick={() => scrollToView("resume")}>
                View Resume
              </button>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default About;
