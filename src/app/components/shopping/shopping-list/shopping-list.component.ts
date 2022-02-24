import { Component, OnInit } from '@angular/core';
import { ShopinglistService } from 'src/app/Services/shopinglist.service';
import { ingredient } from '../Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] | any;
  ingredient: any;

  constructor(private listService: ShopinglistService) { }

  ngOnInit() {
    this.ingredients = this.listService.getlist();
    this.listService.changeIngredient
      .subscribe(
        (ingredient: ingredient[]) => {
          this.ingredients = ingredient;
        });
  }

}