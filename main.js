
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var background = scrolly.querySelector(".background");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

var scroller = scrollama();

function stepEnter(response) {
    var elem = response.element;
    steps.forEach(step => step.classList.remove('is-active'));
    elem.classList.add('is-active');
    background.querySelector("p").innerText = elem.dataset.step;
    background.style.backgroundImage = elem.dataset.backgroundimage;
}

function init() {
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(stepEnter);
        window.addEventListener("resize", scroller.resize);
}

init();