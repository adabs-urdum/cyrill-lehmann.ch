import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import * as BABYLON from "babylonjs";

class Tour extends Overlay {
  constructor(init) {
    super();

    console.log("new Tour");

    this.headElement = init.headElement;
    this.head = init.head;
    this.introSection = init.introSection;
    this.section = document.querySelector(".overlay");
    this.render();
  }

  beforeClose = () => {
    const introWrapper = this.introSection.querySelector(".intro__wrapper");
    this.introSection.insertBefore(this.headElement, introWrapper);
  };

  render = () => {
    const markup = (
      <Fragment>
        <div className="controls__close controls__close--tour">
          <button
            className="controls__icon controls__icon--close button"
            onClick={(e) => {
              this.closePanel(this.section);
            }}
          >
            &times;
          </button>{" "}
        </div>{" "}
        <section className="tour overlay__content">
          <div className="tour__stage tour__stage--1">
            <h1>Oi! Ich bin Cyrill.</h1>{" "}
            <h2>
              Ich schreibe leidenschaftlich gerne Code.
              <br />
              Teilweise werde ich dafür bezahlt.{" "}
            </h2>{" "}
            <p>
              Angefixt wurde ich vor 10 Jahren durch Backend-Logik, bin dann
              aber ins Frontend abgerutscht und arbeite seither hauptsächlich
              mit JavaScript, CSS und meist einem CMS im Backend.{" "}
            </p>{" "}
            <div className="tour__stageDivider tour__stageDivider--default"></div>
          </div>{" "}
          <div className="tour__stage tour__stage--2">
            <h1> Welche Gattung von Web Entwickler ? </h1>{" "}
            <h2>
              Frontend- , Backend- , Fullstack- , -Developer, -Engineer,
              -Architect{" "}
            </h2>{" "}
            <h3>
              Ich nenne mich einfach WebDev. Ich setze komplette Webseiten,
              Webapplikationen, alles dazwischen und einiges darüber um. So
              helfe ich Designern und Agenturen Webauftritte nach ihren
              Vorstellungen zu realisieren. <br />
            </h3>{" "}
            <div className="tour__stageDivider tour__stageDivider--default"></div>
          </div>{" "}
          <div className="tour__stage tour__stage--3">
            <h1> Design zu Code </h1>{" "}
            <h2>
              Ich wandle Designs aus allen gängigen Programmen in massgecodete
              WordPress Themes mit variablen Inhaltsblöcken um. Nach Bedarf auch
              mit Shop, Formularen, Custom Post Types und fast allem, was
              möglich ist. Dabei versuche ich möglichst auf Plugins zu
              verzichten.
            </h2>{" "}
            <img
              className="tour__customThemeImg tour__stageDivider"
              src="./dist/img/wpcustomtheme.jpg"
              alt=""
            />
          </div>{" "}
          <div className="tour__stage tour__stage--4">
            <h1> Ausschliesslich Wordpress? </h1>{" "}
            <h2>
              Nein, es ist nur die beliebteste Option. Ich entwickle auch Seiten
              mit dem CMS ProcessWire und habe Arbeitserfahrung mit Django,
              Laravel und CodeIgniter. Ausserdem bastle ich auch gerne mit
              Raspberry Pi und Game Engines.{" "}
            </h2>{" "}
            <div className="tour__stageDivider tour__stageDivider--default"></div>
          </div>{" "}
          <div className="tour__stage tour__stage--5">
            <h1>Gamification</h1>{" "}
            <h2>
              Meine Königsdisziplin sind wohl Frontend-Eyecandy-Spielereien.{" "}
              <br />
              Ob 3D, Minigames oder einfach CSS Animationen. Hier tobe ich mich
              gerne aus.{" "}
            </h2>{" "}
            <div className="tour__stageDivider tour__stageDivider--default"></div>
          </div>{" "}
          <div className="tour__stage tour__stage--6">
            <h1>3D Modelle</h1>{" "}
            <h2>
              Mit Hilfe von JavaScript Bibliotheken wie Babylon.js ist es
              möglich, 3D Objekte (CAD) im Web darzustellen. Wie auch zum
              Beispiel mein frisch geschorenes Abbild auf dieser Page.
            </h2>{" "}
            <div className="tour__stageDivider tour__stageDivider--default"></div>
          </div>{" "}
          <div className="tour__stage">
            <h1>Simple Minigames</h1>{" "}
            <div className="tour__stageDivider tour__stageDivider--default"></div>
          </div>{" "}
          <div className="tour__stage">
            <h1>Komplexe Minigames</h1>{" "}
            <div className="tour__stageDivider tour__stageDivider--default"></div>
          </div>{" "}
          <div className="tour__stage">
            <button className="button">Nimm Kontakt zu mir auf</button>
            <button className="button">Zieh dir mein Portfolio rein</button>
          </div>{" "}
        </section>{" "}
      </Fragment>
    );
    ReactDOM.render(markup, this.section, () => {
      this.section.style.display = "flex";
      const tourWrapper = this.section.querySelector(".tour");
      tourWrapper.appendChild(this.headElement);
      this.section.classList.add("open");

      console.log(this.head);
      if (this.head.headObj) {
        this.head.headObj.position.z = 0;

        this.head.hemisphericLight.groundColor = new BABYLON.Color3(
          0.2,
          1,
          0.5
        );
        this.head.hemisphericLight.diffuse = new BABYLON.Color3(0.4, 0.6, 0.2);

        this.head.scene.registerBeforeRender(this.moveHead);

        console.log(this.head.camera);
      }
    });
  };

  moveHead = () => {
    console.log("moveHead");
    let readyPosX = false;
    let readyPosY = false;
    let readyAngX = false;
    let readyAngY = false;
    let readyAngZ = false;

    if (
      Math.abs(this.head.leftLimit * 0.7) -
        Math.abs(this.head.headObj.position.x) >
      5
    ) {
      this.head.headObj.position.x += this.head.leftLimit / 30;
    } else {
      this.head.headObj.position.x = this.head.leftLimit * 0.7;

      readyPosX = true;
    }

    if (
      Math.abs(this.head.headObj.position.y) -
        Math.abs(this.head.upperLimit / 2 - 100) >
      2
    ) {
      this.head.headObj.position.y -= this.head.upperLimit / 90;
    } else {
      this.head.headObj.position.y = this.head.upperLimit / 2 - 100;

      readyPosY = true;
    }

    if (-0.7 - this.head.headObj.rotation.y <= 0.1) {
      this.head.headObj.rotation.y -= 0.025;
    } else {
      readyAngY = true;
    }

    if (0 - this.head.headObj.rotation.x <= 0.1) {
      console.log("rotate");
      this.head.headObj.rotation.x -= 0.025;
    } else {
      console.log("readyangle");
      readyAngX = true;
    }

    if (0 - this.head.headObj.rotation.z >= 0.1) {
      console.log("rotate");
      this.head.headObj.rotation.z -= 0.025;
    } else {
      this.head.headObj.rotation.z = 0;
      console.log("readyangle");
      readyAngZ = true;
    }

    if (readyPosX && readyPosY && readyAngY && readyAngX && readyAngZ) {
      this.head.scene.unregisterBeforeRender(this.moveHead);
    }
  };
}

export default Tour;
