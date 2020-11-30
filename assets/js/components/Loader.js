import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Preloader from "preloader/lib";
import axios from "axios";

class Loader {
  constructor(init) {
    console.log("new Loader");
    this.preloader = new Preloader({
      xhrImages: false,
    });

    this.projects = [];

    this.section = document.querySelector("#loader");

    this.addEventListeners();
    this.render();
  }

  addEventListeners = () => {
    this.preloader.on("complete", this.onLoaderComplete);
    this.preloader.on("progress", this.onLoaderProgress);
  };

  reset = () => {
    this.preloader.reset();
  };

  getProjects = (callback) => {
    this.projects = [];

    let fetchUrl =
      window.location.hostname == "localhost"
        ? "https://api.adabs.ch.test"
        : "https://api.adabs.ch";
    fetchUrl = "https://api.adabs.ch";

    axios.get(fetchUrl + "/projekte-2020/").then((response) => {
      const projectsData = response.data.projects;
      projectsData.forEach((project) => {
        this.projects.push({
          name: project.title,
          tags: project.tags,
          client: project.client,
          type: project.type,
          description: project.description,
          link: project.linkout,
          imageSrc: project.image.url,
          imageSrcset: project.image.srcset,
        });
      });

      callback();
    });
  };

  add = (url) => {
    this.preloader.add(url);
  };

  load = () => {
    this.preloader.load();
  };

  loaderComplete = () => {};

  onLoaderComplete = () => {
    this.loaderComplete();
    console.log("onLoaderComplete");
    if (this.loaderBar) {
      this.loaderBar.style.width = `100%`;
    }

    window.setTimeout(() => {
      this.section.classList.add("hidden");
    }, 200);
    window.setTimeout(() => {
      this.section.remove();
    }, 400);
  };

  onLoaderProgress = (data) => {
    console.log("onLoaderProgress: " + Math.floor(data * 100) + "%");
    if (this.loaderBar) {
      this.loaderBar.style.width = `${Math.floor(data * 100)}%`;
    }
  };

  render = () => {
    const markup = (
      <Fragment>
        <div className="loader__wrapper">
          <div id="loaderBar" className="loader__bar">
            {" "}
          </div>{" "}
        </div>{" "}
      </Fragment>
    );

    ReactDOM.render(markup, this.section, () => {
      this.loaderBar = document.getElementById("loaderBar");
    });
  };
}

export default Loader;
