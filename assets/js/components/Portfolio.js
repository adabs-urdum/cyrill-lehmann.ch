import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

class Portfolio extends Overlay {
  constructor(init) {
    super();

    this.controller = init.controller;
    this.gace = init.gace;
    this.loader = init.loader;
    this.head = init.head;
    this.head.stopRenderLoop();

    console.log("new Portfolio");

    this.loader.getProjects(() => {
      this.render();
    });
    this.projects = this.loader.projects;

    this.section = document.querySelector(".overlay");
    this.content = document.querySelector(".overlay__content");
    // if (this.content) {
    //   this.content.scrollTop = 0;
    // }
    this.render();
  }

  beforeClose = () => {
    this.head.startRenderLoop();
  };

  render = () => {
    const projectsJsx = this.projects.map((project, projectKey) => {
      const tags = project.tags.map((tag, key) => {
        return (
          <li key={key} className="portfolio__tag">
            {" "}
            {tag}{" "}
          </li>
        );
      });

      return (
        <a
          key={projectKey}
          className={`portfolio__project portfolio__project--${project.type}`}
          href={project.link}
          target="_blank"
          rel="noopener"
          onClick={(e) => {
            this.gace.triggerEvent(
              "portfolio",
              "linkout",
              "project",
              project.name
            );
          }}
        >
          <div className="portfolio__projectContent">
            <div className="portfolio__projectImageWrapper">
              <img
                className="portfolio__projectImage"
                alt={project.client}
                src={project.imageSrc}
                srcSet={project.imageSrcset}
                loading="lazy"
                sizes="(max-width: 500px) 80vw, 30vw"
              />
            </div>{" "}
            <div className="portfolio__projectDescription">
              <h2 className="portfolio__projectTitle"> {project.name} </h2>
              <p className="portfolio__projectClient">
                {" "}
                {project.client}{" "}
              </p>{" "}
              <p> {project.description} </p>{" "}
              <ul className="portfolio__tags"> {tags} </ul>{" "}
            </div>{" "}
          </div>
        </a>
      );
    });
    const markup = (
      <Fragment>
        <div className="controls__close controls__close--portfolio">
          <button
            className="controls__icon controls__icon--close button"
            onClick={(e) => {
              this.closePanel(this.section);
            }}
            aria-label="navigate to home"
          >
            &times;{" "}
          </button>{" "}
        </div>{" "}
        <section className="portfolio overlay__content">
          <div className="portfolio__contentWrapper">
            <h1 className="portfolio__title">
              {this.loader.projects.length
                ? "Auftragsarbeiten und Basteleien"
                : null}{" "}
            </h1>{" "}
            <div className="portfolio__wrapper">
              <div className="portfolio__projects">{projectsJsx}</div>{" "}
              {this.loader.projects.length ? (
                <button
                  aria-label="navigate to contact"
                  className="button button--fourth"
                  onClick={(e) => {
                    this.controller.setRoute("contact");
                  }}
                >
                  Kontakt
                </button>
              ) : null}
            </div>{" "}
          </div>
        </section>{" "}
      </Fragment>
    );
    ReactDOM.render(markup, this.section, () => {
      this.section.style.display = "flex";
      this.section.classList.add("open");
      this.section.querySelector(".portfolio").scrollTop = 0;
    });
  };
}

export default Portfolio;
