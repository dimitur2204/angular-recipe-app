import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create/recipe-create.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {RecipesResolverService} from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';
const appRoutes:Routes = [
    {path: '',pathMatch:'full', redirectTo:'recipes'},
    {path:'recipes', component:RecipesComponent,
    canActivate:[AuthGuard], children:[   
        {path:'create-recipe',component:RecipeCreateComponent},
        {path:':id', component:RecipeDetailComponent, resolve:[RecipesResolverService]},
        {path:':id/edit', component:RecipeCreateComponent, resolve:[RecipesResolverService]},
    ]},
    {path:'auth', component:AuthComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}