import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping/services/shopping-list.service';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ShoppingListService]
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthService) {
  }
  ngOnInit(): void {
    this.authService.autoLogin();
  }

}
