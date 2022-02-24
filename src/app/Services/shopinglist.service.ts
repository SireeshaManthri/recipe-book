import { EventEmitter, Injectable } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { ingredient } from '../components/shopping/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShopinglistService {
  public changeIngredient = new EventEmitter<ingredient[]>();
 ingredients:ingredient[] =[
    new ingredient('rice',250,10),
    new ingredient('milk',500,30),
    new ingredient('ghee',250,80)
  ];
  constructor() { }
  getlist(){
      return this.ingredients;
  }
addingredient(ing:ingredient){
  
  if(ing.name !== ''){
  this.ingredients.push(ing);
  this.changeIngredient.emit(this.ingredients);
  }
  
  //  console.log( "qwerty"+this.changeIngredient);

  
}
}
