import { recipes } from '../../assets/data/data';

class DataSource {
   constructor (recipes) {
      this.recipes = recipes
   }
   getAllIngredients() {
      const allIngredients = this.recipes.flatMap(recipe =>
          recipe.ingredients.map(ingredient => ingredient.ingredient));
      return [...new Set(allIngredients)]
   }
   getAllAppliances() {
      const allAppliances = this.recipes.map(recipe => recipe.appliance);
      return [...new Set(allAppliances)]
   }
   getAllUstensils() {
      const allUstensils = this.recipes.flatMap(recipe => recipe.ustensils);
      return [...new Set(allUstensils)]
   }
}

export const dataSource = new DataSource(recipes)

class DataFiltered {
   getFilteredIngredients (filteredRecipes) {
      const filteredIngredients = filteredRecipes.flatMap(filteredRecipe =>
          filteredRecipe.ingredients.map(ingredient => ingredient.ingredient));
      return [ ...new Set(filteredIngredients)]
   }
   getFilteredAppliances (filteredRecipes) {
      const filteredAppliances = filteredRecipes.map(filteredRecipe => filteredRecipe.appliance);
      return [ ...new Set(filteredAppliances)]
   }
   getFilteredUstensils (filteredRecipes) {
      const filteredUstensils = filteredRecipes.flatMap(filteredRecipe => filteredRecipe.ustensils);
      return [ ...new Set(filteredUstensils)]
   }
}

export const dataFiltered = new DataFiltered()