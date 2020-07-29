import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddClicked(e:Event,amountEl:HTMLInputElement,nameEl:HTMLInputElement){
    e.preventDefault();
    this.shoppingListService.addIngredient(new Ingredient(nameEl.value,Number(amountEl.value)));
  }
}
