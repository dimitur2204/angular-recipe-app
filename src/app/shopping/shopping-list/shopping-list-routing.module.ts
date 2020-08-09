import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingListComponent} from './shopping-list.component';

const routes:Routes = [    
  {
  path:'shopping-list',
  children:[
    {path:':id',component:ShoppingListComponent}
  ],
  component:ShoppingListComponent,},
]
@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class ShoppingListRoutingModule { }
