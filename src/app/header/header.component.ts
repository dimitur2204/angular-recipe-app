import { 
  Component, 
  OnInit,
  OnDestroy, 
} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  private userSub:Subscription;
  constructor(private dataStorage:DataStorageService, private authService: AuthService) { }

  
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  
  onLogout(){
    this.authService.logout();
  }
}
