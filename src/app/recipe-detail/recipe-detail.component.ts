import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../recipes';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor() { }

  closeDetail() {
    this.recipe = null;
  }

}
