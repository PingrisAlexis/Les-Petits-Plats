//INGREDIENTS SELECTED TAGS
import {Markup} from "./markup";
import {
    appliancesToDisplay,
    ingredientsToDisplay,
    recipesToDisplay, ustensilsToDisplay
} from "./build";
import {recipes} from "../../assets/data/data";
import {dataFiltered} from "./dataLogic";

let allSeletedIngredientsTags = [];
const selectedIngredientsList = document.querySelectorAll(".ingredients-search-filter-tag ");
const selectedIngredientsContainer = document.querySelector(".selected-ingredients-contenair");
const selectedIngredientsTags = (seletedIngredientTag) => {

    allSeletedIngredientsTags.includes(seletedIngredientTag.textContent.trim()) ? false : allSeletedIngredientsTags.push(seletedIngredientTag.textContent.trim());
    selectedIngredientsContainer.innerHTML = allSeletedIngredientsTags.map(item =>
        new Markup(item).getSelectedIngredientsTag()).join("");

    const recipesFilteredByIngredientsTags = recipes.filter(recipe => {
        return (
            recipe.ingredients.some(ingredient => ingredient.ingredient.includes(allSeletedIngredientsTags))
        )})

    recipesToDisplay(recipesFilteredByIngredientsTags);
    ingredientsToDisplay(dataFiltered.getFilteredIngredients(recipesFilteredByIngredientsTags));
    appliancesToDisplay(dataFiltered.getFilteredAppliances(recipesFilteredByIngredientsTags));
    ustensilsToDisplay(dataFiltered.getFilteredUstensils(recipesFilteredByIngredientsTags));
}

selectedIngredientsList.forEach((seletedIngredientTag) => {
    seletedIngredientTag.addEventListener("click",() => {
        selectedIngredientsTags(seletedIngredientTag);
    });
})

//APPLIANCES SELECTED TAGS
const selectedAppliancesList = document.querySelectorAll(".appliances-search-filter-tag");
const selectedAppliancesContainer = document.querySelector(".selected-appliances-contenair");
const selectedAppliancesTags = (seletedApplianceTag) => {
    let allSelectedAppliancesTags = [];

    allSelectedAppliancesTags.includes(seletedApplianceTag.textContent.trim()) ? false : allSelectedAppliancesTags.push(seletedApplianceTag.textContent.trim());
    selectedAppliancesContainer.innerHTML =
        new Markup(allSelectedAppliancesTags).getSelectedAppliancesTag();

    const recipesFilteredByAppliancesTags = recipes.filter(recipe => {
        return (
            recipe.appliance.includes(allSelectedAppliancesTags)
        )})

    recipesToDisplay(recipesFilteredByAppliancesTags);
    ingredientsToDisplay(dataFiltered.getFilteredIngredients(recipesFilteredByAppliancesTags));
    appliancesToDisplay(dataFiltered.getFilteredAppliances(recipesFilteredByAppliancesTags));
    ustensilsToDisplay(dataFiltered.getFilteredUstensils(recipesFilteredByAppliancesTags));
}

selectedAppliancesList.forEach((seletedApplianceTag) => {
    seletedApplianceTag.addEventListener("click",() => {
        selectedAppliancesTags(seletedApplianceTag);
    });
})

//USTENSILS SELECTED TAGS
let allSelectedUstensilsTags = [];
const selectedUstensilsList = document.querySelectorAll(".ustensils-search-filter-tag");
const selectedUstensilsContainer = document.querySelector(".selected-ustensils-contenair");
const selectedUstensilsTags = (seletedUstensilTag) => {

    allSelectedUstensilsTags.includes(seletedUstensilTag.textContent.trim()) ? false : allSelectedUstensilsTags.push(seletedUstensilTag.textContent.trim());
    selectedUstensilsContainer.innerHTML = allSelectedUstensilsTags.map(ustensil =>
        new Markup(ustensil).getSelectedUstensilsTag()).join("");

    const recipesFilteredByUstensilsTags = recipes.filter(recipe => {
        return (
            recipe.ustensils.some(ustensil => ustensil.includes(allSelectedUstensilsTags))
        )})
    recipesToDisplay(recipesFilteredByUstensilsTags);
    ingredientsToDisplay(dataFiltered.getFilteredIngredients(recipesFilteredByUstensilsTags));
    appliancesToDisplay(dataFiltered.getFilteredAppliances(recipesFilteredByUstensilsTags));
    ustensilsToDisplay(dataFiltered.getFilteredUstensils(recipesFilteredByUstensilsTags));
}

selectedUstensilsList.forEach((seletedUstensilTag) => {
    seletedUstensilTag.addEventListener("click",() => {
        selectedUstensilsTags(seletedUstensilTag);
    });
})


// function resetFiltersTag(deleteSelectedTag) {
//     deleteSelectedTag.previousElementSibling.remove();
//     deleteSelectedTag.remove();
//     selectedIngredientsTags.splice(deleteSelectedTag, 1)
// }

// let deleteSelectedTags = document.querySelectorAll(".fa-times-circle")
// deleteSelectedTags.forEach((deleteSelectedTag) => {
//     deleteSelectedTag.addEventListener("click",() => {
//         deleteSelectedTag.previousElementSibling.remove();
//         deleteSelectedTag.remove();
//         allSeletedIngredientsTags.splice(deleteSelectedTag, 1)
//         // recipesToDisplay(recipes);
//         // ingredientsToDisplay(dataSource.getAllIngredients());
//         // appliancesToDisplay(dataSource.getAllAppliances());
//         // ustensilsToDisplay(dataSource.getAllUstensils());
//     })
// })