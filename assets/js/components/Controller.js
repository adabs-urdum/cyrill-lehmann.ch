import Person from "./Person";
import Portfolio from "./Portfolio";
import Tour from "./Tour";

class Controller {
  constructor(init) {
    console.log("new Controller");

    this.head = init.head;
    this.loader = init.loader;

    this.addEventListeners();
    this.onUrlChange();
  }

  addEventListeners = () => {
    window.addEventListener("popstate", this.onPopState);
  };

  onPopState = () => {
    this.onUrlChange();
  };

  setRoute = (route) => {
    const r = route ? route : "";
    window.history.pushState(
      {
        key: "val",
      },
      "",
      `/${r}`
    );
    this.onUrlChange();
  };

  onUrlChange = () => {
    const path = window.location.pathname.split("/");
    switch (path[1]) {
      case "contact":
        const contact = new Person({
          loader: this.loader,
          head: this.head,
        });
        contact.evenBeforeClose = () => {
          this.setRoute("");
        };
        break;
      case "tour":
        const introSection = document.querySelector("#intro");
        const headElement = document.querySelector(".head");
        const tour = new Tour({
          controller: this,
          loader: this.loader,
          head: this.head,
          headElement: headElement,
          introSection: introSection,
        });
        tour.evenBeforeClose = () => {
          this.setRoute("");
        };
        break;
      case "portfolio":
        const portfolio = new Portfolio({
          controller: this,
          loader: this.loader,
          head: this.head,
        });
        portfolio.evenBeforeClose = () => {
          this.setRoute("");
        };
        break;

      default:
        break;
    }
  };
}

export default Controller;
