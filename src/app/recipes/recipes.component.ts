import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent {
  selectedRecipe: Recipe;
  @Input() allRecipes: Recipe[];

  constructor() { }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
