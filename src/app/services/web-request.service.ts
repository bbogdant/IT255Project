import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;


  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }


  login(email: string, password: string) {
    return this.http.post(`http://localhost:3000/user/login`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }

  signup(email: string, password: string, name: string, lastName: string, phoneNumber: string) {
    return this.http.post(`http://localhost:3000/user/register`, {
      email,
      password,
      name,
      lastName,
      phoneNumber
    }, {
        observe: 'response'
      });
  }
}
