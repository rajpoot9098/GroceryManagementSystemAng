import { Injectable } from '@angular/core';
import { iif, Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Userlogin } from 'src/app/classes/userlogin';
import { Responseclass } from 'src/app/classes/responseclass';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient
    ) { }

  baseUrl: string = "http://localhost:53504/Api/Login/"  
  
  public isAuthenticated(): boolean {
    debugger
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  login(_userLogin :Userlogin): Observable<Responseclass> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<any>(this.baseUrl + '/Login/', _userLogin);  
  }

  forgotPassword(_userLogin :Userlogin): Observable<Responseclass> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<any>(this.baseUrl + '/ForgotPassword/', _userLogin);  
  }
}
