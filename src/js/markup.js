export class Markup {
    constructor (recipe) {
        this.recipe = recipe;
    }
    getRecipeCard () {
        return `
                <article class="recipe-card mt-3">          
                    <div class="recipe-image"></div>
                        <div class="recipe-info ">
                            <div class="card-headings container">
                                <div class="row">
                                    <h3 class="card-title col-9">${this.recipe.name}</h3>
                                    <div class="card-time col-3 d-flex mt-1">
                                        <i class="far fa-clock mt-1 pe-1"></i>
                                        <span>${this.recipe.time} min</span>
                                    </div>
                                </div>
                            </div>
                        <div class="container">
                            <div class="row">
                                <ul class="card-ingredients col-sm-5">
                                ${this.recipe.ingredients.map(elt =>
                                    `<li>
                                        <strong>${elt.ingredient}</strong>: ${elt.quantity ? elt.quantity : ''}${elt.unit ? elt.unit : ''} 
                                    </li>`).join('')}
                                </ul>
                                <div class="card-description col-sm-5 ">
                                    <p>
                                        ${this.recipe.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
        `
    }
    getIngredientsList() {
        return `
                <li class="ingredients-search-filter-tag">
                    <strong>${this.recipe}</strong>
                </li>
        `
    }
    getAppliancesList() {
        return `
                <li class="appliances-search-filter-tag">
                    <strong>${this.recipe}</strong>
                </li>
        `
    }
    getUstensilsList() {
        return `
                <li class="ustensils-search-filter-tag">
                    <strong>${this.recipe}</strong>
                </li>
        `
    }
    getSelectedIngredientsTag() {
        return `
                <div class="m-1 d-inline-flex align-items-center categories-tag ingredient-tag">
                    <span class="p-2">${this.recipe}</span>
                    <i class="p-2 far fa-times-circle"></i>
                </div>            
        `
    }
    getSelectedAppliancesTag() {
        return `
                <div class="m-1 d-inline-flex align-items-center categories-tag appliance-tag">
                    <span class="p-2">${this.recipe}</span>
                    <i class="p-2 far fa-times-circle"></i>
                </div>            
        `
    }
    getSelectedUstensilsTag() {
        return `
                <div class="m-1 d-inline-flex align-items-center categories-tag ustensil-tag">
                    <span class="p-2">${this.recipe}</span>
                    <i class="p-2 far fa-times-circle"></i>
                </div>            
        `
    }
    getNoResultMessage() {
        return `
                <div class="mx-auto alert alert-danger w-75 align-self-center mt-3" role="alert">
                     <span>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</span>
                </div>                 
        `
    }
}