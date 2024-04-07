import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent 
{
   @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [ new Recipe("Biryani","helo","https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg"),
                        new Recipe("Nihari","helo","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Wd9dJUdMFphET359W0Fm2bJqDg7xzrq7QQ&usqp=CAU")];
  constructor() { }
  
  onRecipeSelected(recipe: Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {
  }
}
