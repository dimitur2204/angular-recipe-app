import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Output() recipeClicked:EventEmitter<void> = new EventEmitter<void>();
  constructor() {
    
   }

  onRecipeClicked(){
    this.recipeClicked.emit();
   }
  ngOnInit(): void {
  }

}
