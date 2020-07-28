import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Baked potatoes','Potatoes that are baked are vary tasty with ingredients','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'),
    new Recipe('Slow roast Gochujang Chicken','A slowly roasted half-day like Adam chicken','https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')
  ];
  
   
@Output() recipeClicked:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }


  onRecipeClicked(recipe:Recipe){
    this.recipeClicked.emit(recipe);
  }

  ngOnInit(): void {
  }

}
