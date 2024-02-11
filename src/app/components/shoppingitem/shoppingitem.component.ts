import { Component, ElementRef, EventEmitter, ViewChild,  Output } from '@angular/core';
import { Ingrident } from 'src/app/models/Ingredient';

@Component({
  selector: 'app-shoppingitem',
  templateUrl: './shoppingitem.component.html',
  styleUrls: ['./shoppingitem.component.css']
})
export class ShoppingitemComponent {

  @ViewChild('IngredientName') IngredientNameRef : ElementRef
  @ViewChild('IngredientAmount') IngredientAmountRef : ElementRef
  @Output() IngredientAdded = new EventEmitter<Ingrident>();

  onAdd()
  {
    const name = this.IngredientNameRef.nativeElement.value;
    const amount = this.IngredientAmountRef.nativeElement.value;
    const newIngredient = new Ingrident( name , amount )
    this.IngredientAdded.emit(newIngredient);
  }
}
