import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent {

  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onClick(){ this.recipeSelected.emit(); }

}
