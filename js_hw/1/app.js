'use strict'

let myModal = document.getElementById("myModal");
let btn = document.getElementById("modalBtn");
let closeIco = document.getElementsByClassName("close")[0];

btn.addEventListener("click", function () {
    myModal.style.display = "block";
});

closeIco.addEventListener("click", function () {
    myModal.style.display = "none";
});