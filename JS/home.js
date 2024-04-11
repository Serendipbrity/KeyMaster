//  this file is meant for redirecting pages from the homepage

const buildButton = document.querySelector(".build-own-button");

const presetButton = document.querySelector(".play-preset-button");


buildButton.addEventListener("click", function () {
    // Redirect to index.html (home)
    window.location.href = "/HTML/build.html";
});

presetButton.addEventListener("click", function () {
    // Redirect to index.html (home)
    window.location.href = "/HTML/preset.html";
})