import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {

  public listForm: FormGroup;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.listForm = new FormGroup({});
  }

  onAddItem(form:NgForm){
    this.shoppingListService.addIngredient(new Ingredient(form.value.name,Number(form.value.amount)));
  }
}
