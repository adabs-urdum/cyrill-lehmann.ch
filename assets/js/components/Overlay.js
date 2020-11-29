import Acquire from "./Acquire";

class Overlay {
    constructor() {
        console.log("new Overlay");

        this.acquire = new Acquire();
    }

    beforeClose = () => {};
    evenBeforeClose = () => {};

    closePanel = (section) => {
        console.log("close panel");
        this.evenBeforeClose();
        this.beforeClose();
        section.classList.add("close");

        window.setTimeout(() => {
            section.style.display = "none";
            section.classList.remove("close");
            section.classList.remove("open");
        }, 500);
    };
}

export default Overlay;