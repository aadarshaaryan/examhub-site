let box = document.getElementById("search-input");
let img = document.getElementById("search-icon");

box.style.display = "none";

img.addEventListener("click", function (event) {

    event.stopPropagation();

    box.style.display = "block";
});

document.addEventListener("click", function (event) {


    if (!box.contains(event.target) && event.target !== img) {
        box.style.display = "none";
    }

});

const form = document.getElementById('feedbackForm');
const thankYou = document.getElementById('thankYouMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // prevent page reload

    const data = new FormData(form);

    try {
        await fetch('https://formspree.io/f/xnjbkaqp', {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        // Hide form & show thank-you message
        form.style.display = 'none';
        thankYou.style.display = 'block';

    } catch (error) {
        alert('Oops! Something went wrong while submitting your feedback.');
        console.error(error);
    }
});
