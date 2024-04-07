import { Component } from '@angular/core';
import { Ingrident } from 'src/models/Ingredient';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent {
ingredients:Ingrident[] = [new Ingrident('Apples',5),new Ingrident('Tomatoes',10),new Ingrident('Potatoes',15)];

onIngredientAdded(_ingrident: Ingrident) {
  this.ingredients.push(_ingrident);
}

}
