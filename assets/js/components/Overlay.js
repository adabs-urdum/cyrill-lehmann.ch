class Overlay {
    constructor() {
        console.log("new Overlay");
    }

    beforeClose = () => {};
    evenBeforeClose = () => {};

    closePanel = (section) => {
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