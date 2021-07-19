import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Gulab Jamun", 
               "An amazing dessert that leaves you wanting more.",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaytjYQzqpnaT3S3KYw64GT2Balo7PmYQnNQ&usqp=CAU"),
               new Recipe("Gulab Jamun", 
               "An amazing dessert that leaves you wanting more.",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaytjYQzqpnaT3S3KYw64GT2Balo7PmYQnNQ&usqp=CAU")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
