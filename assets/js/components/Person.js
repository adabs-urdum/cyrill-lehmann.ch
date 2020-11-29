import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

class Person extends Overlay {
  constructor(init) {
    super();
    console.log("new Person");
    this.loader = init.loader;
    this.section = document.querySelector(".overlay");
    this.render();
  }

  render = () => {
    const markup = (
      <Fragment>
        <div className="controls__close controls__close--person">
          <button
            className="controls__icon controls__icon--close button"
            onClick={(e) => {
              this.closePanel(this.section);
            }}
          >
            &times;{" "}
          </button>{" "}
        </div>{" "}
        <section className="person overlay__content">
          <div className="person__wrapper">
            <h1>
              Falls du ein cooles Projekt hast
              <br />
              <span>oder einfach «Hallo» sagen willst</span>
            </h1>
            <h2>
              Cyrill Lehmann
              <span>Web Entwickler</span>
            </h2>
            <p>
              <span>Pseudonym</span>Adabs, Adabs Urdum
              <br />
              <span>Wohnort</span>Chur, Schweiz
              <br />
              <span>Mundwerk</span>Fliessend Deutsch, Englisch und Mandarin
              <br />
              <span>Freizeit</span>Code, Ski, Pilze
              <br />
              <span>Stärke</span>Eigenwillig, direkt, ehrlich
              <br />
              <span>Schwäche</span>Eigenwillig, direkt, ehrlich
              <br />
              <span>Arbeit</span>JavaScript, SCSS, HTML, PHP, Wordpress, React
              <br />
            </p>
            <div className="person__buttonWrapper">
              <a
                className="button button--secondary"
                href="mailto:cyrill@adabs.ch"
              >
                E-Mail
              </a>
              <a
                className="button button--secondary"
                href="https://github.com/adabs-urdum/"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              <a
                className="button button--secondary"
                href="https://codepen.io/adabs-urdum/"
                target="_blank"
                rel="noopener"
              >
                Codepen
              </a>
              <a
                className="button button--secondary"
                href="https://cssbattle.dev/player/adabs/"
                target="_blank"
                rel="noopener"
              >
                CSS Battle
              </a>
              <a
                className="button button--secondary"
                href="https://www.linkedin.com/in/adabs-urdum/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a
                className="button button--secondary"
                href="https://www.instagram.com/adabs_urdum/"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>{" "}
      </Fragment>
    );
    ReactDOM.render(markup, this.section, () => {
      this.section.style.display = "flex";
      this.section.classList.add("open");
    });
  };
}

export default Person;
