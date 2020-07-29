import { Component } from '@angular/core';
import { ShoppingListService } from './shopping/services/shopping-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ShoppingListService]
})
export class AppComponent {

  constructor() {
  }

}
