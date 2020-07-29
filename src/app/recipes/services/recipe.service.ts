import { Recipe } from "../recipe.model";
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Baked potatoes','Potatoes that are baked are vary tasty with ingredients','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',[
            new Ingredient('Potatoes',10),
            new Ingredient('Eggs',2),
        ]),
        new Recipe('Slow roast Gochujang Chicken','A slowly roasted half-day like Adam chicken','https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',[
            new Ingredient('Chicken',1),
            new Ingredient('Salt',2),
        ])
      ];
      
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipeById(id){
          return this.recipes[id];
      }
}