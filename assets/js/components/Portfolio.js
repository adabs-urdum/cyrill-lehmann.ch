import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

class Portfolio extends Overlay {
  constructor() {
    super();

    console.log("new Portfolio");
    this.section = document.querySelector(".overlay");
    this.render();
  }

  render = () => {
    const markup = (
      <Fragment>
        <div className="controls__close controls__close--portfolio">
          <button
            className="controls__icon controls__icon--close button"
            onClick={(e) => {
              this.closePanel(this.section);
            }}
          >
            &times;{" "}
          </button>{" "}
        </div>{" "}
        <section className="portfolio overlay__content">
          <div className="portfolio__wrapper">
            <div className="portfolio__bio">
              <h2> Oi!Ich bin Cyrill. </h2>{" "}
              <p>
                Ich code gerne und kann glücklicherweise Geld damit verdienen.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </Fragment>
    );
    ReactDOM.render(markup, this.section, () => {
      this.section.style.display = "flex";
      this.section.classList.add("open");
    });
  };
}

export default Portfolio;
