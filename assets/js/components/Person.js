import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import axios from "axios";

class Person extends Overlay {
  constructor(init) {
    super();
    console.log("new Person");
    this.loader = init.loader;
    this.head = init.head;
    this.head.stopRenderLoop();
    this.section = document.querySelector(".overlay");
    this.render();
  }

  beforeClose = () => {
    this.head.startRenderLoop();
  };

  onSayHello = () => {
    const name = this.section.querySelector("#yourName");
    const nameVal = name.value.trim();
    const mail = this.section.querySelector("#yourEmail");
    const mailVal = mail.value.trim();
    let errors = 0;

    if (mailVal.length <= 0) {
      mail.classList.add("error");
      errors += 1;
    } else {
      mail.classList.remove("error");
    }

    if (nameVal.length <= 0) {
      name.classList.add("error");
      errors += 1;
    } else {
      name.classList.remove("error");
    }

    if (errors === 0) {
      const fetchUrl = "https://api.adabs.ch";

      axios
        .get(`${fetchUrl}/sendhello/?username=${nameVal}&mail=${mailVal}`)
        .then((response) => {
          if (response.data.mailSuccess) {
            this.helloWrapper.innerHTML = `<h4>Hallo ${nameVal}! Ich antworte dir bestimmt noch per E-Mail.</h4>`;
          } else {
            this.helloWrapper.innerHTML = `<h4>Hallo ${nameVal}! Leider hat der Versand technisch nicht funktioniert.</h4>`;
          }
        });
    }
  };

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
              Du hast ein Projekt <span>oder willst «Hallo» sagen?</span>
            </h1>
            <div className="person__helloWrapper">
              <h2>
                Kontakt<span>einfach nur «Hallo»</span>
              </h2>
              <div className="person__helloContainer">
                <div>
                  <p>Grüsse von</p>
                </div>
                <label htmlFor="yourName">
                  <span>dein Name</span>
                  <input id="yourName" type="text" placeholder="" />
                </label>
                <div>
                  <p>@</p>
                </div>
                <label htmlFor="yourEmail">
                  <span>deine E-Mail Adresse</span>
                  <input id="yourEmail" type="email" placeholder="" />
                </label>
                <button
                  className="button button--third button--hello"
                  onClick={this.onSayHello}
                >
                  Hallo sagen
                </button>
              </div>
            </div>
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
      this.helloWrapper = this.section.querySelector(".person__helloWrapper");
    });
  };
}

export default Person;
