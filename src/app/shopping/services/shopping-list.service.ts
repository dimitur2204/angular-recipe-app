import { Ingredient } from "../../shared/ingredient.model";
import { Subject } from 'rxjs';
export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients:Ingredient[] = [
        new Ingredient('Apples',20),
        new Ingredient('Tomatoes',50),
      ];
    private callIngredientsChanged(){
        this.ingredientsChanged.next(this.ingredients.slice());
        }
    getIngredients(){
        return this.ingredients;
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.callIngredientsChanged();
    }
    updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.callIngredientsChanged();

    }
    deleteIngredient(itemIndex: number) {
        this.ingredients.splice(itemIndex,1);
        this.callIngredientsChanged();
      }
    clearIngredients(){
        this.ingredients=[];
        this.callIngredientsChanged();
    }
    getIngredient(index:number){
        return this.ingredients[index];
    }

}