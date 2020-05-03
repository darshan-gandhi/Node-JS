import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `http://localhost:4000/api/auth`;
  constructor(private http: HttpClient) { }

  login(value) {
    return this.http.post<any>(`${this.url}/login`, value);
  }

  signup(value) {
    return this.http.post<any>(`${this.url}/signup`, value);
  }

}