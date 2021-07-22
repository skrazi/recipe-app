import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Sugar", 500),
    new Ingredient("Flour", 2)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getAddedItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
    console.log(ingredient)
  }

}
