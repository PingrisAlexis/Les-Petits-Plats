import {recipes} from "../../assets/data/data";
import {Markup} from "./markup";
import {searchLogic, searchRecipes} from "./searchLogic";

const mainSearchFilter =  document.getElementById("main-search-filter");
const noResultMessage = document.getElementById("no-result-message");

export const mainSearch = (value) => {
    if (value.length >= 3 ) {
       const mainSearchFilteredRecipes = recipes.filter(recipe => {
            return (
                    recipe.name.toLowerCase().includes(value)
                    || recipe.description.toLowerCase().includes(value)
            )})

        if (mainSearchFilteredRecipes.length === 0) {
            noResultMessage.innerHTML = new Markup().getNoResultMessage();
        }
        else {
            noResultMessage.innerHTML = "";
        }
        return(mainSearchFilteredRecipes)
    }
};

mainSearchFilter.addEventListener("input", (e) => {
    searchLogic.main = e.target.value.toLowerCase();
    searchRecipes();
})
