import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @Output() ingredientRemoved: EventEmitter<string> = new EventEmitter<string>();
  @Output() ingredientsClear: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddClicked(e,amountEl:HTMLInputElement,nameEl:HTMLInputElement){
    e.preventDefault();
    this.ingredientAdded.emit(new Ingredient(nameEl.value,Number(amountEl.value)));
  }

  onDeleteClicked(e,nameEl:HTMLInputElement){
    e.preventDefault();
    this.ingredientRemoved.emit(nameEl.value);
  }

  onClearClicked(e){
    e.preventDefault();
    this.ingredientsClear.emit();
  }

}
