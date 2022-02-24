import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { RecipeBookComponent } from './components/Recipes/recipe-book/recipe-book.component';
import { RecipeDetailsComponent } from './components/Recipes/recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './components/Recipes/recipe-items/recipe-items.component';
import { RecipelistComponent } from './components/Recipes/recipelist/recipelist.component';
import { ShoppingCategoryComponent } from './components/shopping/shopping-category/shopping-category.component';
import { ShoppingEditComponent } from './components/shopping/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './components/Recipes/dropdown.directive';
import { RecipeService } from './Services/recipe.service';
import { ShopinglistService } from './Services/shopinglist.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './components/Recipes/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    RecipeBookComponent,
    RecipelistComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    ShoppingEditComponent,
    ShoppingCategoryComponent,
    ShoppingListComponent,
    DropdownDirective,
    RecipeStartComponent

    
    ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [RecipeService ,ShopinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
