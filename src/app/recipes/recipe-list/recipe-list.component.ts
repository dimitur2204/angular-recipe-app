import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  
 recipes:Recipe[] = []; 

  constructor(private recipeService:RecipeService, private dataStorage:DataStorageService) { }



  ngOnInit(): void {
    this.dataStorage.fetchRecipes();
    this.recipeService.recipeChanged.subscribe(recipes => {
      this.dataStorage.storeRecipes();
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }

}
