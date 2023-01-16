import { Injectable } from '@angular/core';
import { Login } from 'src/app/interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  public signIn(userData: Login) {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}