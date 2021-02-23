import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/satay-sweet-potato-curry_1-710fb3f.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
