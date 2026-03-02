// 1. SEARCH TOGGLE
let box = document.getElementById("search-input");
let img = document.getElementById("search-icon");

box.style.display = "none";

img.addEventListener("click", function (event) {
    event.stopPropagation();
    box.style.display = (box.style.display === "none") ? "block" : "none";
});

document.addEventListener("click", function (event) {
    if (!box.contains(event.target) && event.target !== img) {
        box.style.display = "none";
    }
});

// 2. UPWARD ACCORDION LOGIC
// We select all '.question' divs (which contain our buttons)
let questions = document.querySelectorAll(".question");

questions.forEach((q) => {
    q.addEventListener("click", function () {
        let answer = this.nextElementSibling;

        if (answer.style.height === "0px" || answer.style.height === "") {
            // This calculates the exact height of the text inside
            // so no scrollbar is needed.
            answer.style.height = answer.scrollHeight + "px";
        } else {
            answer.style.height = "0px";
        }
    });
});
