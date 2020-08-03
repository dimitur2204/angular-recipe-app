import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import {User} from './user.model';
import { Router } from '@angular/router';
const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6j9xN9peMY216Ef7r36oc8xctwL7sgDA';
const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6j9xN9peMY216Ef7r36oc8xctwL7sgDA';
export interface AuthResponseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered?:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private timer;
  user = new BehaviorSubject<User>(null);
  constructor(private http:HttpClient, private router: Router) { }
  private handleError(errorRes:HttpErrorResponse){
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Such email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Wrong credentials!';
        break;
      case 'INVALID_PASSWORD':
      errorMessage = 'Wrong credentials!';
      break;
    }
    return throwError(errorMessage);
  }

  private handleUserAuth(email:string,id:string,token:string,expiresIn:number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData',JSON.stringify(user));
  }
  autoLogin(){
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.email,
      userData.id, userData._token, new Date(userData._tokenExpirationDate));

      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expiration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.autoLogout(expiration);
      }
  }
  autoLogout(expirationDuration:number){
    this.timer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  signup(email:string, password:string){
    return this.http.post<AuthResponseData>(
      SIGN_UP_URL,
      {
        email,
        password,
        returnSecureToken:true
      }
    ).pipe(catchError(this.handleError), tap(resData => {
      this.handleUserAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
    }));
  }

  singin(email:string,password:string){
    return this.http.post<AuthResponseData>(
      SIGN_IN_URL,
      {
        email,
        password,
        returnSecureToken:true
      }
    ).pipe(catchError(this.handleError), tap(resData => {
      this.handleUserAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
    }));
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = null;
  }
}
