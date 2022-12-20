// Resource reference: https://github.com/desoga10/js-pagination/blob/master/app.js
import data from "../api/data.json" assert { type: "json" };
import State from "./State.js";

const container = document.querySelector("#gridOfHotelsOrTours");
let currentPage = 1;
let pageSize = 12;
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

const previousPage = () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts(currentPage);
    }
};

const nextPage = () => {
    if (currentPage * pageSize < data.length) {
        currentPage++;
        renderProducts(currentPage);
    }
};

const numPages = () => {
    return Math.ceil(data.length / pageSize);
};

const renderProducts = (page = 1) => {
    if (page == 1) {
        prevButton.style.visibility = "hidden";
    } else {
        prevButton.style.visibility = "visible";
    }

    if (page == numPages()) {
        nextButton.style.visibility = "hidden";
    } else {
        nextButton.style.visibility = "visible";
    }

    // initializing the drawing
    container.innerHTML = "";
    data.filter((row, index) => {
        let start = (currentPage - 1) * pageSize;
        let end = currentPage * pageSize;
        if (index >= start && index < end) return true;
    }).forEach((state) => {
        const newState = new State(
            // state.idState,
            state.name,
            // state.price,
            state.image
        );
        State.statesCounter++;
        container.appendChild(newState.render());
    });
};

const defaultRendering = () => {
    // default rendering and actions
    document
        .querySelector("#nextButton")
        .addEventListener("click", nextPage, false);
    document
        .querySelector("#prevButton")
        .addEventListener("click", previousPage, false);

    renderProducts(); // rendering the real states properties
};
const render = defaultRendering();
export { render as Data };