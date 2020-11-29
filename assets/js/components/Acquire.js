import React, { Fragment } from "react";

class Acquire {
  constructor() {
    console.log("new Acquire");
    this.jsx = (
      <section className="acquire">
        <canvas className="acquire__spreader" width="3" height="1"></canvas>
        <div className="acquire__content">
          {/* <div className="acquire__titleWrapper">
            <span className="acquire__title acquire__title--upper">Ich</span>
            <div className="acquire__title acquire__title--lower">
              <span>
                entwickle Webseiten, Webapplikationen und alles dazwischen.
              </span>
              <span>baue dir ein massgeschneidertes Wordpress Theme.</span>
              <span>baue dir eine Webseite mit dem CMS ProcessWire.</span>
              <span>entwickle dir einen Shop mit, oder ohne Woocommerce.</span>
              <span>baue dir eine Webseite statisch oder mit Framework.</span>
              <span>code auch Minigames, 3D und andere Eyecatcher.</span>
              <span>
                baue dir eigentlich alles mit Webtechnologie mögliche.
              </span>
              <span>vermeide es möglichst, Plugins zu verwenden.</span>
              <span>wandle dein Design exakt in Code um.</span>
            </div>
          </div> */}

          <div className="acquire__titleWrapper">
            <h1>Deine Meinung</h1>
          </div>
          <p className="acquire__cta button button--secondary">Los geht's</p>
        </div>
      </section>
    );
  }
}

export default Acquire;
