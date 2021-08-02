import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // COMMENTED BECAUSE WE ARE USING ROUTING FOR SELECTING THE RECIPE
  // THROUGH THE ID. NO NEED OF SELECTEDRECIPE NOW.
  // currentSelectedRecipe: Recipe;

  // constructor(private recipeService: RecipeService) { }

  // ngOnInit(): void {
  //   this.recipeService.recipeSelected
  //   .subscribe(
  //     (recipe: Recipe) => {
  //       this.currentSelectedRecipe = recipe;
  //     }
  //   );
  // }

  // getSelectedRecipe(recipe: Recipe) {
  //   this.currentSelectedRecipe = recipe;
  // }

  ngOnInit() {

  }
}
