import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  private editMode:boolean = false;
  private recipe:Recipe;
  private id:number;
  private ingredients:FormArray;
  public recipeForm:FormGroup;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute) {

   }
   get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params.id;
      this.editMode = isNaN(this.id) ? false : true;
      if (this.editMode) {
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    });
    const {name,description,imagePath,ingredients} = this.recipe || {};
    const formIngredients = new FormArray([]);
    if (ingredients) {
        for (const ingr of ingredients) {
          formIngredients.push(new FormGroup({
            "name":new FormControl(ingr.name),
            "amount":new FormControl(ingr.amount)
          }))
      }
    }
    this.ingredients = formIngredients;
    this.recipeForm = new FormGroup({
      'name': new FormControl(name || null,Validators.required),
      'description': new FormControl(description || null, Validators.required),
      'imagePath':new FormControl(imagePath|| null, Validators.required),
      'ingredients': this.ingredients
    })
  }
  onAddIngredientClicked(){
    this.ingredients.push(new FormGroup({
      "name":new FormControl(null),
      "amount":new FormControl(null)
    }))
  }
  onSubmitClicked(){
    for (const control of Object.values(this.recipeForm.controls)) {
      
    }
  }
}
