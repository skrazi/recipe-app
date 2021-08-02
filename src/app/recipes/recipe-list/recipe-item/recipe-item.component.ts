import { stringify } from '@angular/compiler/src/util';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  // constructor(private recipeService: RecipeService, private router: Router,
  //   private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // onRecipeSelected() {
  //   // this.recipeService.recipeSelected.emit(this.recipe);
  //   // this.router.navigate(['/recipes', this.getDashedName(this.recipe.name)])
  //   // console.log(this.getDashedName(this.recipe.name));

  //   this.router.navigate(['/recipes', this.route.snapshot.params['id']]);
  // }

  getDashedName(name: string) {
    let dashed: string = "";
    for (let s of name) {
      if (s !== " ") {
        dashed += s.toLowerCase();
      } else {
        dashed += "-";
      }
    }
    return dashed;
  }

}
