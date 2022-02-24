import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { recipes } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
   
    public recipes:recipes[] | any;
  constructor(private recpService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recpService.getRecipe();
  }


}

