import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() public recipe:recipes []| any;
  constructor() { }
  ngOnInit(): void {

  }

}
