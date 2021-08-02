import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // recipeSelected = new Subject<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      "Gulab Jamun", 
      "An amazing dessert that leaves you wanting more.",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaytjYQzqpnaT3S3KYw64GT2Balo7PmYQnNQ&usqp=CAU",
      [
        new Ingredient('Sugar', 2),
        new Ingredient('Flour', 1)
      ]),
      new Recipe("Rasgulla", 
      "This ball of sweetness will take you on a trip",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaytjYQzqpnaT3S3KYw64GT2Balo7PmYQnNQ&usqp=CAU",
      [
        new Ingredient('Sugar', 2),
        new Ingredient('Milk', 1),
        new Ingredient('Saffron', 5)
      ])
  ];

  getRecipes() {
    // returns the copy of the array not the reference
    return this.recipes.slice();
  }

  getRecipeByName(name: string): Recipe {
    for(let recipe of this.recipes) {
      if (recipe.name === name) {
        return recipe;
      }
    }
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    // ingredients.forEach(ingredient => {
    //   this.shoppingListService.addIngredient(ingredient);
    // });
    this.shoppingListService.addIngredients(ingredients);
  }
}