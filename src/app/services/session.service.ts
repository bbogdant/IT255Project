import { Injectable } from '@angular/core';
import { User } from '../models';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private isLoggedIn = false;
  user: User;

  constructor() { }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }
}