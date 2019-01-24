import { Component } from '@angular/core';
import { RECIPES } from './recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  recipes = RECIPES;
  title = 'app-root works';
}
