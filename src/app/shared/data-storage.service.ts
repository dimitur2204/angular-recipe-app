import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/services/recipe.service';
import {map} from 'rxjs/operators';
const BASE_URL:string = 'https://recipeapp-a41d4.firebaseio.com/';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient, private recipeService:RecipeService) { }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put(BASE_URL + 'recipes.json',recipes).subscribe();
  }

  fetchRecipes() {
    return this.http
    .get<Recipe[]>(BASE_URL + 'recipes.json')
    .pipe(map(recipes => {
      return recipes.map(r =>{
        return {...r, ingredients: r.ingredients ? r.ingredients : []};
      })
    })).subscribe(recipes => {
      this.recipeService.setRecipes(recipes);
    });
  }

}
