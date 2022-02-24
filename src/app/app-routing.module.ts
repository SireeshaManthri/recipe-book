import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './components/Recipes/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';

const approute:Routes=[
  {path:'recipes',component:RecipeBookComponent},
  {path:'shoppingList',component:ShoppingListComponent},
  {path:'',redirectTo:'/recipes',pathMatch:'full'}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(approute)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
