import {ingredientsToDisplay, recipesToDisplay} from "./build";
import {recipes} from "../../assets/data/data";
import {Markup} from "./markup";
import {dataFiltered} from "./dataLogic";

const mainSearchFilter =  document.getElementById("main-search-filter");
const noResultMessage = document.getElementById("no-result-message");

export const mainSearch = (e) => {
    const value = e.target.value.toLowerCase();

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
        recipesToDisplay(mainSearchFilteredRecipes);
        ingredientsToDisplay(dataFiltered.getFilteredIngredients(mainSearchFilteredRecipes));
    }
};

mainSearchFilter.addEventListener("input", mainSearch)
