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
    this.gace = init.gace;
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

    this.gace.triggerEvent("contact", "form", nameVal, mailVal);

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
            this.helloContainer.innerHTML = `<p>Ciao ${nameVal}! Vielleicht schreibe ich dir zurück.</p>`;
          } else {
            this.helloContainer.innerHTML = `<p>Ciao ${nameVal}! Leider hat der Versand technisch nicht funktioniert.</p>`;
          }
        });
    }
  };

  render = () => {
    const markup = (
      <Fragment>
        <div className="controls__close controls__close--person">
          <button
            aria-label="navigate to home"
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
              <div className="person__infoWrapper">
                <h2>Cyrill Lehmann</h2>
                <ul className="person__hashtags">
                  <li>Web Entwickler</li>
                  <li>Chur</li>
                  <li>Schweiz</li>
                </ul>
                <h3>Mundwerk</h3>
                <ul className="person__hashtags">
                  <li>Deutsch</li>
                  <li>Englisch</li>
                  <li>Mandarin</li>
                </ul>
                <h3>Handwerk</h3>
                <ul className="person__hashtags">
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>PHP</li>
                </ul>
                <h3>Beiwerk</h3>
                <ul className="person__hashtags">
                  <li>Ski</li>
                  <li>Pilzzucht</li>
                  <li>Chilizucht</li>
                </ul>
              </div>
              <div className="person__helloWrapper">
                <h3>Kontakt</h3>
                <div className="person__contactButtonWrapper">
                  <a
                    className="button button--secondary"
                    href="mailto:cyrill@adabs.ch"
                    onClick={(e) => {
                      this.gace.triggerEvent(
                        "contact",
                        "linkout",
                        "contact",
                        "cyrill@adabs.ch"
                      );
                    }}
                  >
                    cyrill@adabs.ch
                  </a>
                </div>
                <h3>«Hallo» sagen</h3>
                <div className="person__helloContainer">
                  <label htmlFor="yourName">
                    <span>dein Name</span>
                    <div>
                      <input id="yourName" type="text" autoComplete="name" />
                    </div>
                  </label>
                  <label htmlFor="yourEmail">
                    <span>deine E-Mail Adresse</span>
                    <div>
                      <input id="yourEmail" type="email" autoComplete="email" />
                    </div>
                  </label>
                  <div>
                    <button
                      aria-label="submit form"
                      className="button button--secondary"
                      onClick={this.onSayHello}
                    >
                      Hallo
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="person__buttonWrapper">
                <a
                  className="button button--secondary"
                  href="https://github.com/adabs-urdum/"
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => {
                    this.gace.triggerEvent(
                      "contact",
                      "linkout",
                      "social media",
                      "GitHub"
                    );
                  }}
                >
                  GitHub
                </a>
                <a
                  className="button button--secondary"
                  href="https://www.linkedin.com/in/adabs-urdum/"
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => {
                    this.gace.triggerEvent(
                      "contact",
                      "linkout",
                      "social media",
                      "LinkedIn"
                    );
                  }}
                >
                  LinkedIn
                </a>
                <a
                  className="button button--secondary"
                  href="https://codepen.io/adabs-urdum/"
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => {
                    this.gace.triggerEvent(
                      "contact",
                      "linkout",
                      "social media",
                      "Codepen"
                    );
                  }}
                >
                  Codepen
                </a>
                <a
                  className="button button--secondary"
                  href="https://cssbattle.dev/player/adabs/"
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => {
                    this.gace.triggerEvent(
                      "contact",
                      "linkout",
                      "social media",
                      "CSS Battle"
                    );
                  }}
                >
                  CSS Battle
                </a>
                <a
                  className="button button--secondary"
                  href="https://profile.codersrank.io/user/adabs-urdum/"
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => {
                    this.gace.triggerEvent(
                      "contact",
                      "linkout",
                      "social media",
                      "CodersRank"
                    );
                  }}
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
      this.helloContainer = this.section.querySelector(
        ".person__helloContainer"
      );
    });
  };
}

export default Person;
