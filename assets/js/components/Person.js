import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

class Person extends Overlay {
  constructor() {
    super();

    console.log("new Person");
    this.section = document.querySelector(".overlay");
    this.render();

    // this.dialogue =
  }

  render = () => {
    const markup = (
      <section className="person">
        <div className="person__wrapper">
          <div className="person__bio">
            <h2>Oi! Ich bin Cyrill.</h2>
            <p>
              Ich code gerne und kann glücklicherweise Geld damit verdienen.
            </p>
          </div>
        </div>
      </section>
    );
    ReactDOM.render(markup, this.section, () => {
      console.log("rendered");
    });
  };
}

export default Person;
