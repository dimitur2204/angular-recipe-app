import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients:Ingredient[];
  clicked:Boolean;
  subscriptions:Subscription[] = [];
  constructor(private shoppingListService:ShoppingListService) { }



  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    const subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
            this.ingredients = ingredients;
          });
          this.subscriptions.push(subscription);
      }
    onIngredientClicked(index:number){
      this.shoppingListService.startedEditing.next(index);
    }
    ngOnDestroy(): void {
      this.subscriptions.forEach(s => s.unsubscribe());
    }
}
