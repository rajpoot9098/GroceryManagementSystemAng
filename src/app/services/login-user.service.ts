import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';
import { Responseclass } from '../classes/responseclass';
import { HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(public http: HttpClient) { }
  baseUrl: string = "http://localhost:53504/Api/Login/"
  LoginUser(employee: Employee): Observable<Responseclass> {  
    debugger
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Responseclass>(this.baseUrl + '/Login/',  
    employee, httpOptions);  
  } 
}
