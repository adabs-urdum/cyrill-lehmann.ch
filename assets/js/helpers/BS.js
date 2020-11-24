class BaseSize {
  constructor() {
    this.value = 0;
    this.unit = "vw";
    this.breakPoints = [1920, 1440, 1024, 768, 500];

    this.setBaseSize();

    this.addEventListeners();
  }

  addEventListeners = () => {
    window.addEventListener("resize", this.setBaseSize);
  };

  setBaseSize = () => {
    const windowWidth = window.innerWidth;
    this.unit = "px";
    this.value = 1;

    this.breakPoints.forEach((bP) => {
      if (windowWidth <= bP) {
        this.unit = "vw";
        this.value = 100 / bP;
      }
    });
  };
}

export default BaseSize;
