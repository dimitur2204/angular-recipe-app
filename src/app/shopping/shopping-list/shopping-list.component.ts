import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('Apples',20),
    new Ingredient('Tomatoes',50),
  ];

  constructor() { }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients= this.ingredients.concat(ingredient);
  }
  onIngredientRemoved(name:string){
    this.ingredients= this.ingredients.filter(i => i.name!==name);
  }
  onIngredientsClear(){
    this.ingredients= [];
  }
  ngOnInit(): void {
  }

}
