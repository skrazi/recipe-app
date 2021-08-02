import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeSelectedFromList = new EventEmitter<Recipe>();
  recipes: Recipe[];


  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    console.log('list got recipes')
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }



}
