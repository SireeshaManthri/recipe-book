import { EventEmitter, Injectable } from '@angular/core';
import { recipes } from '../components/Recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public selectRecipe = new EventEmitter<recipes>();

  private recipes: recipes[] = [
    new recipes('parmannam', 'A holy dish',
      'https://www.cookshideout.com/wp-content/uploads/2014/10/kobbari-paramannam-coconut-rice-pudding-vegan-recipe.1024x1024.jpg')
    ,
    new recipes('pulihora', 'The authentic dish',
      'https://c1.staticflickr.com/9/8776/28833766486_87bc0be6e2_z.jpg ')];
  constructor() { }
  getRecipe() {
    return this.recipes;
  }
}
