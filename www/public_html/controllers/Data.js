// Resource reference: https://github.com/desoga10/js-pagination/blob/master/app.js
import data from "../oldApi/data.json" assert { type: "json" };
import State from "./State.js";
let container = document.querySelector("#gridOfTours");
if (document.querySelector("#gridOfHotelsOrTours") !== null) {
    container = document.querySelector("#gridOfHotelsOrTours");
}

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

    data.filter(el => {
        if (window.location.href.includes('tours')) {
            if (el.type === 'tour') {
                return el    
            }
        } else {
            if (el.type === 'hotel') {
                return el    
            }
        }
    }).filter((row, index) => {
        let start = (currentPage - 1) * pageSize;
        let end = currentPage * pageSize;
        if (index >= start && index < end) return true;
    }).forEach((state) => {
        const newState = new State(
            state.name,
            state.image,
            state.type
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