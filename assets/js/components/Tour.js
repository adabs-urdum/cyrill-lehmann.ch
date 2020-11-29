import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import * as BABYLON from "babylonjs";

class Tour extends Overlay {
  constructor(init) {
    super();

    console.log("new Tour");

    this.controller = init.controller;
    this.headElement = init.headElement;
    this.head = init.head;
    this.introSection = init.introSection;
    this.section = document.querySelector(".overlay");

    this.render();
  }

  addEventListeners = () => {
    console.log("addEventListeners");
    this.tour.addEventListener("scroll", this.onWindowScroll);
    window.addEventListener("resize", this.onWindowResize);
  };

  onWindowResize = () => {
    this.tourHeight = window.innerHeight * this.tour.children.length;
  };

  onWindowScroll = () => {
    window.history.pushState(
      {
        key: "val",
      },
      "",
      `/tour/${Math.round(this.tour.scrollTop / window.innerHeight) + 1}`
    );
  };

  beforeClose = () => {
    const introWrapper = this.introSection.querySelector(".intro__wrapper");
    this.introSection.insertBefore(this.headElement, introWrapper);
    this.tour.removeEventListener("scroll", this.onWindowScroll);
  };

  checkUrl = () => {
    if (window.location.pathname.split("/").length >= 3) {
      const slideNr = window.location.pathname.split("/")[2];
      if (slideNr) {
        this.tour.scrollTop = (slideNr - 1) * window.innerHeight;
      }
    }
  };

  render = () => {
    const _this = this;

    const markup = (
      <Fragment>
        <div className="controls__close controls__close--tour">
          <button
            className="controls__icon controls__icon--close button"
            onClick={(e) => {
              this.closePanel(this.section);
            }}
          >
            &times;{" "}
          </button>{" "}
        </div>{" "}
        <section className="tour overlay__content">
          <div className="tour__stage tour__stage--1">
            <h1> Oi!Ich bin Cyrill. </h1>{" "}
            <h2>
              Ich schreibe leidenschaftlich gerne viel Code <br /> und auch
              leidenschaftlich viel gerne Code. <br />{" "}
            </h2>{" "}
            <p className="trivia">
              Trivia: Ich drücke mich manchmal ungewollt umständlich aus.Häufig
              aber gewollt.{" "}
            </p>{" "}
            <div className="tour__stageDivider tour__stageDivider--default">
              {" "}
            </div>{" "}
          </div>{" "}
          <div className="tour__stage tour__stage--2">
            <h1> Welche Gattung von Web Entwickler ? </h1>{" "}
            <h3>
              Ich setze komplette Webseiten, Webapplikationen, alles dazwischen
              und einiges darüber um.So helfe ich DesignerInnen und AgenturInnen
              Webauftritte nach ihren Vorstellungen zu realisieren. <br />
            </h3>{" "}
            <p className="trivia">
              Trivia : Ich musste zuerst eine Lehre zum Polygraf abschliessen,
              bevor ich Quereinsteiger werden konnte.{" "}
            </p>{" "}
            <div className="tour__stageDivider tour__stageDivider--default">
              {" "}
            </div>{" "}
          </div>{" "}
          <div className="tour__stage tour__stage--3">
            <h1> Custom Wordpress Themes </h1>{" "}
            <h2>
              Ich schreibe Designs aus allen gängigen Programmen in massgecodete
              WordPress Themes mit variablen Inhaltsblöcken um.Nach Bedarf auch
              mit Shop, Formularen, Custom Post Types oder auch headless. Dabei
              versuche ich möglichst auf Plugins zu verzichten, um die volle
              Kontrolle und Freiheit zu haben.{" "}
            </h2>{" "}
            <p className="trivia">
              Trivia: Mit selbstentwickelten Themes wird Wordpress auch ein Tool
              für Entwickler, die etwas von sich halten.{" "}
            </p>{" "}
            <img
              className="tour__customThemeImg tour__stageDivider"
              src="./dist/img/wpcustomtheme.jpg"
              alt=""
            />
          </div>{" "}
          <div className="tour__stage tour__stage--4">
            <h1> Ausschliesslich Wordpress ? </h1>{" "}
            <h2>
              Nein, ich entwickle auch Seiten mit dem CMS ProcessWire und habe
              Arbeitserfahrung mit Django, Laravel und CodeIgniter.Ich bastle
              allgemein mit allem, was die Webtechnologie hergibt und
              beschäftige mich auch mit RaspberryPi und Game Engines.{" "}
            </h2>{" "}
            <p className="trivia">
              Trivia : Ich habe einen RaspberryPi, der als Lichtcomputer für
              meine Wohnung fungiert.{" "}
            </p>{" "}
            <div className="tour__stageDivider tour__stageDivider--default">
              {" "}
            </div>{" "}
          </div>{" "}
          <div className="tour__stage tour__stage--5">
            <h1>Was geht im Frontend?</h1>{" "}
            <h2>
              Ich setze zur Zeit auf Vanilla Javascript (mit
              Third-Party-Libraries) und SCSS. Vermutlich einfach aus Spass am
              Coden setze ich Frameworks wie React.js meist erst ab einer
              gewissen Projektgrösse ein. Je nach Anforderung bin ich da
              natürlich flexibel. Ansonsten mag ich JavaScript-Spielereien, die
              Userinteraktion erfordern.
            </h2>{" "}
            <p className="trivia">
              Trivia: Internet Explorer sollte wie Pluto aus dem Kreise der
              Grossen ausgeschlossen werden.{" "}
            </p>{" "}
            <div className="tour__stageDivider tour__stageDivider--default">
              {" "}
            </div>{" "}
          </div>{" "}
          <div className="tour__stage">
            <h1>Out of the Box CSS und JavaScript</h1>{" "}
            <h2>
              Im Grafik- und Funktionsumfang einfach gehaltene Module oder
              Minigames lassen sich problemlos mit JavaScript, CSS und HTML
              realisieren.{" "}
            </h2>{" "}
            <div className="tour__buttonWrapper">
              <button className="button">Finde den Unterschied</button>
              <button className="button">Wimmelbild</button>
            </div>
            <p className="trivia">
              Trivia: Ich züchte in meiner Freizeit Pilze.Also Esspilze.Also
              Gourmet - Esspilze, keine Lass - Uns - Die - Vierte - Dimension -
              Erforschen - Esspilze.{" "}
            </p>{" "}
            <div className="tour__stageDivider tour__stageDivider--default">
              {" "}
            </div>{" "}
          </div>{" "}
          <div className="tour__stage">
            <h1>Grafisch komplexe Module</h1>{" "}
            <h2>
              Grafisch aufwändigerere Module und Minigames baue ich mit Hilfe
              von Bibliotheken wie Pixi.js. Technisch gesehen, erzeugen diese
              jede Sekunde zig Bilder und stellen diese in einer Canvas dar.
            </h2>{" "}
            <div className="tour__buttonWrapper">
              <button className="button">Schiess den Vogel ab</button>
            </div>
            <p className="trivia">
              Trivia: Namensgebung ist nicht meine Stärke.{" "}
            </p>{" "}
            <img
              className="tour__blenderImg tour__stageDivider"
              src="./dist/img/blender.jpg"
              alt=""
            />
          </div>{" "}
          <div className="tour__stage tour__stage--6">
            <h1> 3 D - Modelle </h1>{" "}
            <h2>
              Mit Hilfe von JavaScript Bibliotheken wie Babylon.js ist es
              möglich, 3 D - Objekte im Web darzustellen.Wie auch zum Beispiel
              mein frisch geschorenes Abbild auf dieser Page.{" "}
            </h2>{" "}
            <p className="trivia">
              Trivia: Ehrlich gesagt, finde ich meine Visage etwas
              unheimlich.Das 3 D - Modell tut dem keinen Abbruch.{" "}
            </p>{" "}
            <div className="tour__stageDivider tour__stageDivider--default">
              {" "}
            </div>{" "}
          </div>{" "}
          <div className="tour__stage">
            <h1>Für jede Herausforderung ein Ansatz</h1>{" "}
            <h2>
              Mit einer Kombination aus diesen Techniken kann ich jedes Projekt,
              das du dir ausdenkst (und technisch möglich ist), umsetzen. Diese
              grossspurige Behauptung solltest du auf jeden Fall mit einem
              Projekt testen.
            </h2>{" "}
            <div className="tour__buttonWrapper">
              <button
                className="button button--secondary"
                onClick={() => {
                  _this.beforeClose();
                  _this.controller.setRoute("contact");
                }}
              >
                Überzeugt{" "}
              </button>{" "}
              <button
                className="button"
                onClick={() => {
                  _this.beforeClose();
                  _this.controller.setRoute("portfolio");
                }}
              >
                Nicht überzeugt
              </button>{" "}
            </div>
            <p className="trivia">
              Trivia: Ich bin immer auf der Suche nach der Miete für einen der
              kommenden Monate.{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
      </Fragment>
    );
    ReactDOM.render(markup, this.section, () => {
      this.section.style.display = "flex";
      const tourWrapper = this.section.querySelector(".tour");
      tourWrapper.appendChild(this.headElement);
      this.section.classList.add("open");

      if (this.head.headObj) {
        this.head.headObj.position.z = 0;

        this.head.hemisphericLight.groundColor = new BABYLON.Color3(
          0.2,
          1,
          0.5
        );
        this.head.hemisphericLight.diffuse = new BABYLON.Color3(0.4, 0.6, 0.2);

        this.head.scene.registerBeforeRender(this.moveHead);
      }

      this.tour = this.section.querySelector(".tour");
      this.tourHeight = window.innerHeight * this.tour.children.length;
      this.addEventListeners();

      this.checkUrl();
    });
  };

  moveHead = () => {
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
      this.head.headObj.rotation.x -= 0.025;
    } else {
      readyAngX = true;
    }

    if (0 - this.head.headObj.rotation.z >= 0.1) {
      this.head.headObj.rotation.z -= 0.025;
    } else {
      this.head.headObj.rotation.z = 0;
      readyAngZ = true;
    }

    if (readyPosX && readyPosY && readyAngY && readyAngX && readyAngZ) {
      this.head.scene.unregisterBeforeRender(this.moveHead);
    }
  };
}

export default Tour;
