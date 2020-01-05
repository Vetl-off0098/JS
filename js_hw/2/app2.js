"use strict"

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function (event) {
//     let productImg = document.getElementsByClassName("product__img")[0];
//     let desc = document.createElement("div");
//     desc.style.width = "356px";
//     desc.style.minHeight = "392px";
//     desc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis perspiciatis neque iure in voluptatum numquam vitae rem placeat. Neque porro doloribus beatae ratione excepturi mollitia officia odit quo omnis.";
//     productImg.parentNode.replaceChild(desc, productImg);
//     this.innerText = "Отмена";

//     let productWrap = event.target.parentNode;
//     let productObj = {

//     };
//     let btnText = card
// });

let buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        handleClick(event);
    });
});

function handleClick (buttonClickEvent) {
    const cardNode = buttonClickEvent.target.parentNode;

    const card = {
        wrap: cardNode,
        productName: cardNode.querySelector(".productName"),
        img: cardNode.querySelector("img"),
        button: cardNode.querySelector("button")
    };

    let buttonText = card.button.innerText;
    if (buttonText == "Подробнее") {
        showMoreText(card);
    } else if (buttonText == "Отмена") {
        hideMoreText(card);
    };
}

function showMoreText(card) {
    card.img.style.display = "none";
    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis perspiciatis neque iure in voluptatum numquam vitae rem placeat. Neque porro doloribus beatae ratione excepturi mollitia officia odit quo omnis.";
    card.productName.insertAdjacentHTML("afterend", `<div class="desc">${desc}</div>`);
    card.button.innerText = "Отмена";
}

function hideMoreText(card) {
    card.img.style.display = "block";
    card.wrap.querySelector(".desc").remove();
    card.button.innerText = "Подробнее";
}