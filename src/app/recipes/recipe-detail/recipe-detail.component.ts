import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping/services/shopping-list.service';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public recipe:Recipe;

  constructor(private route:ActivatedRoute,private shoppingService:ShoppingListService,private recipeService:RecipeService) { }

  ngOnInit(): void {
    //this.recipe = this.route.snapshot.params.id;
    this.route.params.subscribe((data:Data) => {
      this.recipe = this.recipeService.getRecipeById(data.id);
    })
    
  }
  addIngredientsToShopping(){
    this.recipe.ingredients.forEach(i =>this.shoppingService.addIngredient(i))
  }
}
