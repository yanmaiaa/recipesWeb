import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Cooking-Meat-Recipe-Dinner-Restaurant-Grill-Beef-2508859.jpg'
    ),
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
