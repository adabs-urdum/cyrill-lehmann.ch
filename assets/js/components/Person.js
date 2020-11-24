import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

class Person extends Overlay {
  constructor() {
    super();

    console.log("new Person");
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
            &times;
          </button>
        </div>
        <section className="person overlay__content">
          <div className="person__wrapper">
            <div className="person__bio">
              <h2>Oi! Ich bin Cyrill.</h2>
              <p>
                Ich code gerne und kann glücklicherweise Geld damit verdienen.
              </p>
            </div>
          </div>

          {this.acquire.jsx}
        </section>
      </Fragment>
    );
    ReactDOM.render(markup, this.section, () => {
      this.section.style.display = "flex";
      this.section.classList.add("open");
    });
  };
}

export default Person;
