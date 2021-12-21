import {recipes} from "../../assets/data/data";
import {searchLogic, searchRecipes} from "./searchLogic";

const mainSearchFilter =  document.getElementById("main-search-filter");

export const mainSearch = (value) => {
       const mainSearchFilteredRecipes = recipes.filter(recipe => {
            return (
                    recipe.name.toLowerCase().includes(value)
                    || recipe.description.toLowerCase().includes(value)
            )})
        return(mainSearchFilteredRecipes)
};

mainSearchFilter.addEventListener("input", (e) => {
    searchLogic.main = e.target.value.toLowerCase();
    searchRecipes();
})