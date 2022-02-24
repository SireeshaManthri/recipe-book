import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers:[RecipeService]
})
export class RecipeBookComponent implements OnInit {
 public RecipeSelected:recipes[] | any;


  selectRecipe: recipes | any;
  constructor(private recpService:RecipeService) { }

  ngOnInit() {
    console.log('Hello '+JSON.stringify(this.RecipeSelected));
    this.recpService.selectRecipe.
    subscribe((recipe:recipes)=>{
      this.RecipeSelected=recipe;
    })
  }

}
