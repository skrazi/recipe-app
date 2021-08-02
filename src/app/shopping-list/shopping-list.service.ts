import { EventEmitter, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  // ingredientsChanged= new EventEmitter<Ingredient[]>();
  ingredientsChanged= new Subject<Ingredient[]>();


  private ingredients: Ingredient[] = [
    new Ingredient("Sugar", 500),
    new Ingredient("Flour", 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients);
  }
  
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient in ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }
}