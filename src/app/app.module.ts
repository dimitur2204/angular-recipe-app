import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from "./app-routing.module";
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create/recipe-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RecipeService } from './recipes/services/recipe.service';
import { AuthComponent } from './auth/auth.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {ShoppingListModule} from './shopping/shopping-list/shopping-list.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeCreateComponent,
    AuthComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ShoppingListModule
  ],
  providers: [RecipeService, {provide: HTTP_INTERCEPTORS, 'useClass': AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
