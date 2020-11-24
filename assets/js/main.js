"use strict";

import "babel-polyfill";
import GACE from "./googleAnalyticsCustomEvents";
import BaseSize from "./helpers/BS";
import Intro from "./components/intro";
import Head from "./components/Head";

Array.prototype.shuffle = function() {
    return this.sort(function() {
        return Math.random() - 0.5;
    });
};

Array.prototype.getRandomValue = function() {
    return this.shuffle()[0];
};

Array.prototype.uniqueValues = function() {
    return [...new Set(this)];
};

document.addEventListener("DOMContentLoaded", function() {
    // set GA-ID
    // const gace = new GACE({
    //   id: "UA-164327129-1",
    // });

    const BS = new BaseSize();

    const head = new Head();

    const intro = new Intro({
        head: head,
    });
});