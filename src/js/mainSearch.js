import {recipes} from "../../assets/data/data";
import {searchLogic, searchRecipes} from "./searchLogic";

const mainSearchFilter =  document.getElementById("main-search-filter");

export const mainSearch = (value) => {

    let mainSearchFilteredRecipes = []

    for (let i=0; i< recipes.length; i++) {
      if (recipes[i].name.toLowerCase().includes(value) 
          || recipes[i].description.toLowerCase().includes(value)) {
          mainSearchFilteredRecipes.push(recipes[i])
      }
    }
        return(mainSearchFilteredRecipes)
};

mainSearchFilter.addEventListener("input", (e) => {
    searchLogic.main = e.target.value.toLowerCase();
    searchRecipes();
})