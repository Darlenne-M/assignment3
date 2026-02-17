
// Select all buttons
const button = document.querySelectorAll("button");

// Select the favorites list
const favoritesList = document.querySelector("#favorites-list");

// Loop through all the buttons
button.forEach(function (button) {
    button.addEventListener("click", function () {

        // find the article
        const article = button.closest("article");

        // highlights the article
        article.classList.toggle("highlighted");

        // change the button tect to "Remove"
        button.textContent = "Remove";

        // find the dish name and price
        const dishName = article.querySelector("h4").textContent;
        const price = parseFloat(article.querySelector(".price").textContent.replace("$", ""));

        // create a list item
        const li = document.createElement("li");

        li.textContent = dishName + "       $" + price.toFixed(2);


        // add to favorites summary
        favoritesList.appendChild(li);
    });
});





