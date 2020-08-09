import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm;
  private subscription:Subscription;
  public editMode = false;
  private itemIndex: number;
  private editItem:Ingredient;
  constructor(private shoppingListService:ShoppingListService) { }


  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index:number) => {
        this.editMode = true;
        this.itemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name:this.editItem.name,
          amount:this.editItem.amount
        });
      }
    );
  }

  onAddItem(form:NgForm){
    const ingredient = new Ingredient(form.value.name,Number(form.value.amount));
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.itemIndex,ingredient);
    }else{
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }
  onClearClicked(){
    this.shoppingListService.clearIngredients();
    this.editMode = false;
  }
  onDeleteClicked(){
    this.shoppingListService.deleteIngredient(this.itemIndex);
    this.editMode = false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
