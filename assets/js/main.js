"use strict";

import "babel-polyfill";
import GACE from "./googleAnalyticsCustomEvents";
import BaseSize from "./helpers/BS";
import Intro from "./components/intro";
import Head from "./components/Head";
import Controller from "./components/Controller";
import Loader from "./components/Loader";

Array.prototype.shuffle = function () {
  return this.sort(function () {
    return Math.random() - 0.5;
  });
};

Array.prototype.getRandomValue = function () {
  return this.shuffle()[0];
};

Array.prototype.uniqueValues = function () {
  return [...new Set(this)];
};

document.addEventListener("DOMContentLoaded", function () {
  // set GA-ID
  const gace = new GACE({
    id: "G-QG52GC6XJC",
  });

  const loader = new Loader();

  const BS = new BaseSize();

  const head = new Head({ loader: loader });

  loader.loaderComplete = () => {
    head.onLoaderReady();
  };

  const controller = new Controller({
    loader: loader,
    head: head,
    gace: gace,
  });

  const intro = new Intro({
    loader: loader,
    controller: controller,
    head: head,
  });

  loader.load();
});
