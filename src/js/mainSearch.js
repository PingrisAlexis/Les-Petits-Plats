import {Markup} from "./markup";

const mainSearch =  document.getElementById("main-search-filter");
const noResultMessage = document.getElementById("no-result-message");

mainSearch.addEventListener("keyup", function() {

    const mainSearchFilterValue = this.value.toLowerCase();
    const recipes = document.querySelectorAll(".recipe-card");
    
    const selectedFilter = document.getAttribute("data-filter");
    console.log(selectedFilter)
    let allHiddenRecipes = [];
    recipes.forEach((elt) => {

        let filteredRecipes = elt.innerHTML.toLowerCase();
        let hiddenRecipes = document.querySelectorAll(".hide");

         if (mainSearchFilterValue.length >= 3 && filteredRecipes.indexOf(mainSearchFilterValue) === -1) {
             elt.classList.add("hide");
             allHiddenRecipes.push(hiddenRecipes);

             if (allHiddenRecipes.length === 50) {
                 noResultMessage.innerHTML = new Markup().getNoResultMessage();
             }
         }
         else {
             elt.classList.remove("hide");
             noResultMessage.innerHTML = "";
         }
    })
});


