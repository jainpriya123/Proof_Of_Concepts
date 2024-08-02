import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
    
  login(loginData:object) {
    // debugger;
      return this.http.post<User>(`${this.apiUrl}/login`, loginData, {
        headers: new HttpHeaders().set('Content-Type', "application/json")
      });
  }

  getProfile(){
    // debugger;
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }
}