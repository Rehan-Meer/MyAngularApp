import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipelistComponent } from './components/recipelist/recipelist.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { RecipedetailComponent } from './components/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './components/recipeitem/recipeitem.component';
import { ShoppingitemComponent } from './components/shoppingitem/shoppingitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    ShoppinglistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    ShoppingitemComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
