import {ingredientsToDisplay, recipesToDisplay} from "./build";
import {recipes} from "../../assets/data/data";
import {Markup} from "./markup";


const mainSearchFilter =  document.getElementById("main-search-filter");
const noResultMessage = document.getElementById("no-result-message");



export const mainSearch = () => {
    const mainSearchFilterValue = mainSearchFilter.value.toLowerCase();

    if (mainSearchFilterValue.length >= 3 ) {
        const mainSearchFilteredRecipes = recipes.filter(recipe => {
            return (
                    recipe.name.toLowerCase().includes(mainSearchFilterValue.toLowerCase())
                    || recipe.description.toLowerCase().includes(mainSearchFilterValue.toLowerCase())
                    || recipe.ingredients.some(elt => elt.ingredient.includes(mainSearchFilterValue))
            )})

        if (mainSearchFilteredRecipes.length === 0) {
            noResultMessage.innerHTML = new Markup().getNoResultMessage();
        }
        else {
            noResultMessage.innerHTML = "";
        }

        recipesToDisplay(mainSearchFilteredRecipes);
        ingredientsToDisplay(mainSearchFilteredRecipes);
    }
};

mainSearchFilter.addEventListener("keyup", mainSearch)
