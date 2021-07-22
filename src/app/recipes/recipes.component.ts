import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  currentSelectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedRecipe(recipe: Recipe) {
    this.currentSelectedRecipe = recipe;
  }

}
