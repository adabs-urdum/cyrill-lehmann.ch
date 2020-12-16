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

  onSayHello = (e) => {
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

      e.currentTarget.disabled = true;

      axios
        .get(`${fetchUrl}/sendhello/?username=${nameVal}&mail=${mailVal}`)
        .then((response) => {
          if (response.data.mailSuccess) {
            this.helloWrapper.innerHTML = `<h3>Ciao ${nameVal}! Ich melde mich sicher noch per E-Mail.</h3>`;
          } else {
            this.helloWrapper.innerHTML = `<h3>Ciao ${nameVal}! Leider hat der Versand technisch nicht funktioniert.</h3>`;
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
            <div className="person__upperWrapper">
              <h2>Eckdaten</h2>
              <ul className="person__hashtags">
                <li>Cyrill Lehmann</li>
                <li>Web Entwickler</li>
                <li>Chur</li>
                <li>Schweiz</li>
              </ul>
              <h2>Mundwerk</h2>
              <ul className="person__hashtags">
                <li>Deutsch</li>
                <li>Englisch</li>
                <li>Mandarin</li>
              </ul>
              <h2>Freizeit</h2>
              <ul className="person__hashtags">
                <li>Code</li>
                <li>Ski</li>
                <li>Pilzzucht</li>
              </ul>
              <h2>Täglich Brot</h2>
              <ul className="person__hashtags">
                <li>JavaScript</li>
                <li>SCSS</li>
                <li>HTML</li>
                <li>PHP</li>
                <li>Wordpress</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <div className="person__helloWrapper">
                <h3>Einfach mal «Hallo» sagen</h3>
                <div className="person__helloContainer">
                  <label htmlFor="yourName">
                    <span>dein Name</span>
                    <input id="yourName" type="text" autoComplete="name" />
                  </label>
                  <div>
                    <p>@</p>
                  </div>
                  <label htmlFor="yourEmail">
                    <span>deine E-Mail Adresse</span>
                    <input id="yourEmail" type="email" autoComplete="email" />
                  </label>
                  <button
                    className="button button--third button--hello"
                    onClick={this.onSayHello}
                  >
                    Hallo
                  </button>
                </div>
              </div>
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
                  href="https://www.linkedin.com/in/adabs-urdum/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
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
                  href="https://profile.codersrank.io/user/adabs-urdum/"
                  target="_blank"
                  rel="noopener"
                >
                  CodersRank
                </a>
                {/* <a
                  className="button button--secondary"
                  href="https://www.instagram.com/adabs_urdum/"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram
                </a> */}
              </div>
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
