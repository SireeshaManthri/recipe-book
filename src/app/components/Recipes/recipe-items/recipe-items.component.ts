import { Component, Input, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
 @Input() public recipe:recipes | any;
 
  constructor(private recpService:RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recpService.selectRecipe.emit(this.recipe);
    console.log( this.recipe);
  }
}
