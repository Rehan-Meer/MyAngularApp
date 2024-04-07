import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { RecipesComponent } from 'src/components/recipes/recipes.component';
import { RecipelistComponent } from 'src/components/recipelist/recipelist.component';
import { ShoppinglistComponent } from 'src/components/shoppinglist/shoppinglist.component';
import { RecipedetailComponent } from 'src/components/recipedetail/recipedetail.component';
import { RecipeitemComponent } from 'src/components/recipeitem/recipeitem.component';
import { ShoppingitemComponent } from 'src/components/shoppingitem/shoppingitem.component';

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
