import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

class Portfolio extends Overlay {
  constructor(init) {
    super();

    this.loader = init.loader;

    console.log("new Portfolio");
    this.projects = [
      {
        type: "fun",
        title: "birds.adabs.ch",
        client: "Mein bis jetzt einziges komplettes Spiel",
        description: "Open Source Grafiken und Pixi.js",
        href: "https://birds.adabs.ch/",
        imageSrc: "https://api.adabs.ch/wp-content/uploads/2020/04/birds.jpg",
        imageSrcset:
          "https://api.adabs.ch/wp-content/uploads/2020/04/birds-300x169.jpg 300w, https://api.adabs.ch/wp-content/uploads/2020/04/birds-768x433.jpg 768w, https://api.adabs.ch/wp-content/uploads/2020/04/birds-512x289.jpg 512w, https://api.adabs.ch/wp-content/uploads/2020/04/birds.jpg 900w",
        tags: ["JavaScript", "Pixi.js", "GameDev"],
      },
      {
        type: "work",
        title: "projectcircleg.com",
        client: "Project Circleg",
        description: "Umsetzung Custom Wordpress Theme anhand Design",
        href: "https://projectcircleg.com/",
        imageSrc:
          "https://api.adabs.ch/wp-content/uploads/2020/10/circleg-scaled.jpg",
        imageSrcset:
          "https://api.adabs.ch/wp-content/uploads/2020/10/circleg-300x169.jpg 300w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-1024x576.jpg 1024w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-768x432.jpg 768w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-1536x864.jpg 1536w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-2048x1152.jpg 2048w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-2000x1125.jpg 2000w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-1450x816.jpg 1450w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-512x288.jpg 512w",
        tags: ["Wordpress", "JavaScript", "SVG Animationen"],
      },
      {
        type: "fun",
        title: "fishpond.adabs.ch",
        client: "Angefangen und nie weiterentwickelt",
        description: "Hat kein Ende, ist aber auf einem spielbaren Stand",
        href: "http://fishpond.adabs.ch/",
        imageSrc:
          "https://api.adabs.ch/wp-content/uploads/2020/05/fishpond.png",
        imageSrcset:
          "https://api.adabs.ch/wp-content/uploads/2020/05/fishpond-300x167.png 300w, https://api.adabs.ch/wp-content/uploads/2020/05/fishpond-1024x570.png 1024w, https://api.adabs.ch/wp-content/uploads/2020/05/fishpond-768x427.png 768w, https://api.adabs.ch/wp-content/uploads/2020/05/fishpond-1536x854.png 1536w, https://api.adabs.ch/wp-content/uploads/2020/05/fishpond-2048x1139.png 2048w, https://api.adabs.ch/wp-content/uploads/2020/05/fishpond-2000x1112.png 2000w, https://api.adabs.ch/wp-content/uploads/2020/05/fishpond-1450x807.png 1450w, https://api.adabs.ch/wp-content/uploads/2020/05/fishpond-512x285.png 512w",
        tags: ["JavaScript", "Pixi.js", "GameDev"],
      },
      {
        type: "work",
        title: "sarahschott.ch",
        client: "Sarah Schott Kreation",
        description: "Umsetzung Custom Wordpress Theme anhand Design",
        href: "https://sarahschott.ch/",
        imageSrc:
          "https://api.adabs.ch/wp-content/uploads/2020/07/Screen-Shot-2020-07-01-at-14.11.20.png",
        imageSrcset:
          "https://api.adabs.ch/wp-content/uploads/2020/07/Screen-Shot-2020-07-01-at-14.11.20-300x169.png 300w, https://api.adabs.ch/wp-content/uploads/2020/07/Screen-Shot-2020-07-01-at-14.11.20-1024x578.png 1024w, https://api.adabs.ch/wp-content/uploads/2020/07/Screen-Shot-2020-07-01-at-14.11.20-768x434.png 768w, https://api.adabs.ch/wp-content/uploads/2020/07/Screen-Shot-2020-07-01-at-14.11.20-1536x868.png 1536w, https://api.adabs.ch/wp-content/uploads/2020/07/Screen-Shot-2020-07-01-at-14.11.20-2048x1157.png 2048w, https://api.adabs.ch/wp-content/uploads/2020/07/Screen-Shot-2020-07-01-at-14.11.20-2000x1130.png 2000w, https://api.adabs.ch/wp-content/uploads/2020/07/Screen-Shot-2020-07-01-at-14.11.20-1450x819.png 1450w, https://api.adabs.ch/wp-content/uploads/2020/07/Screen-Shot-2020-07-01-at-14.11.20-512x289.png 512w",
        tags: ["Wordpress", "JavaScript", "SVG Animationen"],
      },
      {
        type: "fun",
        title: "observer.cyrill-lehmann.ch",
        client: "Einer meiner wenigen CSS-Art Versuche",
        description: "JavaScript wurde nur benutzt, um die Augen zu bewegen",
        href: "https://observer.cyrill-lehmann.ch/",
        imageSrc:
          "https://api.adabs.ch/wp-content/uploads/2020/04/robojelly-scaled.jpg",
        imageSrcset:
          "https://api.adabs.ch/wp-content/uploads/2020/04/robojelly-300x169.jpg 300w, https://api.adabs.ch/wp-content/uploads/2020/04/robojelly-1024x577.jpg 1024w, https://api.adabs.ch/wp-content/uploads/2020/04/robojelly-768x432.jpg 768w, https://api.adabs.ch/wp-content/uploads/2020/04/robojelly-1536x865.jpg 1536w, https://api.adabs.ch/wp-content/uploads/2020/04/robojelly-2048x1153.jpg 2048w, https://api.adabs.ch/wp-content/uploads/2020/04/robojelly-2000x1126.jpg 2000w, https://api.adabs.ch/wp-content/uploads/2020/04/robojelly-1450x816.jpg 1450w, https://api.adabs.ch/wp-content/uploads/2020/04/robojelly-512x288.jpg 512w",
        tags: ["SCSS", "JavaScript"],
      },
      {
        type: "work",
        title: "gazenergie.rtk.ch",
        client: "Gazenergie über rtk.ch",
        description:
          "Design und Umsetzung von Produktions-Multistep-Bestellformular",
        href: "https://gazenergie.rtk.ch/",
        imageSrc:
          "https://api.adabs.ch/wp-content/uploads/2020/10/circleg-scaled.jpg",
        imageSrcset:
          "https://api.adabs.ch/wp-content/uploads/2020/10/circleg-300x169.jpg 300w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-1024x576.jpg 1024w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-768x432.jpg 768w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-1536x864.jpg 1536w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-2048x1152.jpg 2048w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-2000x1125.jpg 2000w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-1450x816.jpg 1450w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-512x288.jpg 512w",
        tags: ["Wordpress", "JavaScript", "SVG Animationen"],
      },
      {
        type: "fun",
        title: "Birdshooter",
        client: "Mein bis jetzt einziges komplettes Spiel",
        description: "Open Source Grafiken und Pixi.js",
        href: "https://birds.adabs.ch/",
        imageSrc: "https://api.adabs.ch/wp-content/uploads/2020/04/birds.jpg",
        imageSrcset:
          "https://api.adabs.ch/wp-content/uploads/2020/04/birds-300x169.jpg 300w, https://api.adabs.ch/wp-content/uploads/2020/04/birds-768x433.jpg 768w, https://api.adabs.ch/wp-content/uploads/2020/04/birds-512x289.jpg 512w, https://api.adabs.ch/wp-content/uploads/2020/04/birds.jpg 900w",
        tags: ["JavaScript", "Pixi.js", "GameDev"],
      },
      {
        type: "work",
        title: "projectcircleg.com",
        client: "Project Circleg",
        description: "Umsetzung Custom Wordpress Theme anhand Design",
        href: "https://projectcircleg.com/",
        imageSrc:
          "https://api.adabs.ch/wp-content/uploads/2020/10/circleg-scaled.jpg",
        imageSrcset:
          "https://api.adabs.ch/wp-content/uploads/2020/10/circleg-300x169.jpg 300w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-1024x576.jpg 1024w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-768x432.jpg 768w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-1536x864.jpg 1536w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-2048x1152.jpg 2048w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-2000x1125.jpg 2000w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-1450x816.jpg 1450w, https://api.adabs.ch/wp-content/uploads/2020/10/circleg-512x288.jpg 512w",
        tags: ["Wordpress", "JavaScript", "SVG Animationen"],
      },
    ];
    this.projects.forEach((project) => {
      this.loader.add(project.imageSrc);
    });
    this.section = document.querySelector(".overlay");
    this.content = document.querySelector(".overlay__content");
    if (this.content) {
      this.content.scrollTop = 0;
    }
    this.render();
  }

  render = () => {
    const projectsJsx = this.projects.map((project, projectKey) => {
      const tags = project.tags.map((tag, key) => {
        return (
          <li key={key} className="portfolio__tag">
            {tag}
          </li>
        );
      });
      return (
        <a
          key={projectKey}
          className={`portfolio__project portfolio__project--${project.type}`}
          href={project.href}
          target="_blank"
          rel="noopener"
        >
          <h1 className="portfolio__projectTitle">{project.title}</h1>
          <img
            className="portfolio__projectImage"
            src={project.imageSrc}
            srcSet={project.imageSrcset}
            sizes="(max-width: 500px) 80vw, 70vw"
          />
          <div className="portfolio__projectDescription">
            <p>{project.client}</p>
            <p>{project.description}</p>
            <ul className="portfolio__tags">{tags}</ul>
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
          >
            &times;{" "}
          </button>{" "}
        </div>{" "}
        <section className="portfolio overlay__content">
          <h1 className="portfolio__title">Arbeitsauszüge</h1>
          <div className="portfolio__wrapper">
            <div className="portfolio__projects">
              <div className="portfolio__project portfolio__project--title portfolio__project--fun">
                <p>Hobby</p>
              </div>
              <div className="portfolio__project portfolio__project--title portfolio__project--work">
                <p>Arbeit</p>
              </div>
              {projectsJsx}
            </div>
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
