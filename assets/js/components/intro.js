import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Person from "./Person";
import Portfolio from "./Portfolio";
import Tour from "./Tour";
import * as BABYLON from "babylonjs";

class Intro {
  constructor(init) {
    console.log("new Intro");
    this.controller = init.controller;
    this.section = document.querySelector(".intro");
    this.headElement = document.querySelector(".head");
    this.head = init.head;
    this.currentStage = null;
    this.loader = init.loader;

    this.isFullscreen = false;
    this.fullscreenTrigger = document.querySelector("#fullscreenTrigger");
    if (!document.fullscreenEnabled) {
      this.fullscreenTrigger.style.display = "none";
    }

    // add assets for tour
    this.loader.add("./../../dist/img/wpcustomtheme.jpg");
    this.loader.add("./../../dist/img/blender.jpg");

    this.addEventListeners();
    this.render();
  }

  addEventListeners = () => {
    this.section.addEventListener("mousemove", this.onMouseMove, {
      passive: true,
    });
    this.section.addEventListener(
      "touchmove",
      (e) => {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
        this.onMouseMove(e);
      },
      { passive: true }
    );
    this.fullscreenTrigger.addEventListener("click", this.onFullscreenClick);
  };

  onFullscreenClick = (e) => {
    if (this.isFullscreen) {
      document.exitFullscreen();
      this.fullscreenTrigger.classList.remove("active");
    } else {
      document.documentElement.requestFullscreen();
      this.fullscreenTrigger.classList.add("active");
    }
    this.isFullscreen = !this.isFullscreen;
  };

  onMouseMove = (e) => {
    if (this.head.headObj) {
      this.mousePosRel = {
        x: Math.round((200 / window.innerWidth) * e.clientX - 100) / 100,
        y: Math.round((200 / window.innerHeight) * e.clientY - 100) / 100,
      };

      if (this.head.ready) {
        this.head.headObj.rotation.x = this.mousePosRel.y * 0.7;
        this.head.headObj.rotation.y = this.mousePosRel.x * -1.1;
        this.head.headObj.rotation.z = this.mousePosRel.x * 0.3;

        this.head.headObj.position.x =
          this.mousePosRel.x * this.head.leftLimit * 0.35;
        this.head.headObj.position.y = this.mousePosRel.y * 40 + 20;
      }
    }

    if (this.head.ready) {
      this.head.scene.unregisterBeforeRender(this.head.rotateHead);
    }
  };

  render = () => {
    const markup = (
      <Fragment>
        <div className="intro__wrapper">
          <div className="intro__rows">
            <div className="intro__row">
              <h1 className="intro__title"> Cyrill Lehmann </h1>{" "}
            </div>{" "}
            <div className="intro__row">
              <h1 className="intro__title"> aka adabs urdum </h1>{" "}
            </div>{" "}
            <div className="intro__row">
              <h1 className="intro__title"> Freelance web developer </h1>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="intro__list">
          <button
            aria-label="navigate to contact"
            onClick={(e) => {
              this.controller.setRoute("contact");
            }}
            className="intro__button button"
          >
            Kontakt{" "}
          </button>{" "}
          <button
            aria-label="navigate to tour"
            onClick={(e) => this.controller.setRoute("tour/1")}
            className="intro__button button button--third desktop_only"
          >
            Tour{" "}
          </button>{" "}
          <button
            aria-label="navigate to portfolio"
            onClick={(e) => this.controller.setRoute("portfolio")}
            className="intro__button button"
          >
            Portfolio{" "}
          </button>{" "}
        </div>{" "}
      </Fragment>
    );

    ReactDOM.render(markup, this.section, () => {
      this.headElement.classList.add("intro__head");
      this.section.insertBefore(this.headElement, this.section.children[0]);
    });
  };
}

export default Intro;
