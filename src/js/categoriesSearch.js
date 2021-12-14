import {appliancesToDisplay, ustensilsToDisplay, ingredientsToDisplay} from "./build";
import {dataSource} from './dataLogic';

//INGREDIENTS SEARCH FILTERS
const ingredientsSearchFilters =  document.querySelector(".filter-input--ingredients");
export const ingredientsSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredIngredientsBySearch = dataSource.getAllIngredients().filter(ingredient => {
        return (
            ingredient.toLowerCase().includes(value)
        )})
    ingredientsToDisplay(filteredIngredientsBySearch);
};
ingredientsSearchFilters.addEventListener("input", ingredientsSearch)

//APPLIANCES SEARCH FILTERS
const appliancesSearchFilters =  document.querySelector(".filter-input--appliances");
const appliancesSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredAppliancesBySearch = dataSource.getAllAppliances().filter(appliance => {
        return (
            appliance.toLowerCase().includes(value)
        )})
    appliancesToDisplay(filteredAppliancesBySearch);
};
appliancesSearchFilters.addEventListener("input", appliancesSearch)

//USTENSILS SEARCH FILTERS
const ustensilsSearchFilters =  document.querySelector(".filter-input--ustensils");
const ustensilsSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredAppliancesBySearch = dataSource.getAllUstensils().filter(ustensil => {
        return (
            ustensil.toLowerCase().includes(value)
        )})
    ustensilsToDisplay(filteredAppliancesBySearch);
};
ustensilsSearchFilters.addEventListener("input", ustensilsSearch)