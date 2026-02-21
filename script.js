"use strict";

// Select all buttons
const button = document.querySelectorAll("button");

// Select the favorites list
const favoritesList = document.querySelector("#favorites-list");

const totalElement = document.querySelector("#total");
let total = 0;

button.forEach(function AddEventListener(btn) {
    btn.addEventListener("click", buttonFunction)
});

function buttonFunction(event) {

    const button = event.currentTarget;

    // find the article
    const article = button.closest("article");

    // find the dish name and price
    const dishName = article.querySelector("h4").textContent;
    const price = parseFloat(article.querySelector(".price").textContent.replace("$", ""));

    if (button.textContent === "Add to Favorites") {

        // highlights the article
        article.classList.toggle("highlighted");

        // change the button tect to "Remove"
        button.textContent = "Remove";

        // create a list item
        const li = document.createElement("li");

        li.textContent = dishName + "       $" + price.toFixed(2);
        // store the name and price
        li.price = price;
        li.dishName = dishName;

        // add to favorites summary
        favoritesList.appendChild(li);

        //update total
        total += price;
        totalElement.textContent = "Total: $" + total.toFixed(2);


    } else {
        article.classList.remove("highlighted");

        // change button text back to "Add to favorites"
        button.textContent = "Add to Favorites";

        // Remove from favorites list
        const items = favoritesList.querySelectorAll("li");
        items.forEach(item => {
            if (item.dishName === dishName) {
                total -= item.price;
                item.remove();
            }
        });

        totalElement.textContent = "Total: $" + total.toFixed(2);

    }
}
