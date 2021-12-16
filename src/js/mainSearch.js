import {recipes} from "../../assets/data/data";
import {Markup} from "./markup";
import {searchLogic, searchRecipes} from "./searchLogic";

const mainSearchFilter =  document.getElementById("main-search-filter");
const noResultMessage = document.querySelector("#no-result-message");

export const mainSearch = (value) => {

    let mainSearchFilteredRecipes = []

    for (let i=0; i< recipes.length; i++) {
      if (recipes[i].name.toLowerCase().includes(value)) {
          mainSearchFilteredRecipes.push(recipes[i])
      }
    }
    for (let i=0; i< recipes.length; i++) {
        if (recipes[i].description.toLowerCase().includes(value)) {
            mainSearchFilteredRecipes.push(recipes[i])
        }
    }

    if (mainSearchFilteredRecipes.length === 0) {
            noResultMessage.innerHTML = new Markup().getNoResultMessage();
        }
        else {
            noResultMessage.innerHTML = "";
        }
        return(mainSearchFilteredRecipes)
};

mainSearchFilter.addEventListener("input", (e) => {
    searchLogic.main = e.target.value.toLowerCase();
    searchRecipes();
})
