import { Recipe } from "../recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
@Injectable({
    providedIn:"root"
})
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
      ];
      constructor() {
          
      }
      getRecipes(){
          return this.recipes;
      }
      getRecipeById(id){

          return this.recipes[id];
      }
      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());
 
      }
      updateRecipe(index:number,recipe:Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
      
    }
    deleteRecipe(recipe:Recipe) {
        this.recipes = this.recipes.splice(this.recipes.indexOf(recipe),1);
        this.recipeChanged.next(this.recipes.slice());
        
      }
      setRecipes(recipes:Recipe[]){
          this.recipes = recipes;
          this.recipeChanged.next(this.recipes.slice());
        
      }
}