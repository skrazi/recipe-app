import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        // this.recipe = this.recipeService.getRecipeByName(this.undashName(params['name']));
        this.recipe = this.recipeService.getRecipeById(+params['id']);
      }
    )
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  // undashName(dashedName: string) {
  //   let name: string = "";
  //   for(let i = 0; i < dashedName.length; i++) {
  //     if (i === 0 ) {
  //       name += dashedName[i].toUpperCase();
  //     } else if (dashedName[i] === '-') {
  //       name += ' ' + dashedName[i+1].toUpperCase();
  //       i++;
  //     } else {
  //       name += dashedName[i];
  //     }
  //   }
  //   //console.log(name);
  //   return name;
  // }

}
