export class Markup {
    constructor (recipe) {
        this.recipe = recipe;
    }
    getRecipeCard () {
        return `
                <article class="recipe-card mt-3" data-filter-appliances="${this.recipe.appliance}" 
                                                  data-filter-ingredients="${this.recipe.ingredients.map(elt => `${elt.ingredient}`)}"
                                                  data-filter-ustensils="${this.recipe.ustensils}">
                                   
                                
                    <div class="recipe-image"></div>
                        <div class="recipe-info ">
                            <div class="card-headings d-flex justify-content-between fs-6 m-1">
                                <h3 class="card-title p-0 m-0 fw-light">${this.recipe.name}</h3>
                                <div class="card-time d-flex align-items-center justify-content-center flex-nowrap fw-bold w-25">
                                    <i class="far fa-clock pe-1"></i>
                                    <p class="p-0 m-0">${this.recipe.time} min</p>
                                </div>
                            </div>
                        <div class="d-flex m-1 gap-3  fs-8">
                             <ul class="card-ingredients p-0 m-0">
                             ${this.recipe.ingredients.map(elt =>
                                `<li>
                                    <strong>${elt.ingredient}</strong>: ${elt.quantity ? elt.quantity : ''}${elt.unit ? elt.unit : ''} 
                                </li>`).join('')}
                             </ul>
                            <div class="card-description">
                                <p class="p-0 m-0 flex-grow-1">
                                    ${this.recipe.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>`
    }
    getIngredientsList () {
        return `
                ${this.recipe.ingredients.map(elt =>
                    `<li>
                         <strong>${elt.ingredient}</strong>
                    </li>`).join('')}
        `
    }
    getAppliancesList () {
        return `
                ${this.recipe.appliance.map(elt =>
                    `<li>
                         <strong>${elt.appliance}</strong>
                    </li>`).join('')}
        `
    }
    getUstensilsList () {
        return `
                ${this.recipe.ustensils.map(elt =>
                    `<li>
                         <strong>${elt.ustensils}</strong>
                    </li>`).join('')}
        `
    }
}