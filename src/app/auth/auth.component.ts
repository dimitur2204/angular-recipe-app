import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService, AuthResponseData} from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public loginMode = false;
  public isLoading = false;
  public error:string = null;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  switchMode(){
    this.loginMode = !this.loginMode;
  }
  onSubmit(form:NgForm){
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs:Observable<AuthResponseData>;

    if (this.loginMode) {
      authObs = this.authService.singin(email,password)
    }else{
      this.isLoading = true;
      authObs = this.authService.signup(email,password)
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
      },
      errorMes => {
        this.error = errorMes;
        this.isLoading = false;
      });
    form.reset();
  }
}
