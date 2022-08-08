import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from '../classes/employee';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';  
import { Responseclass } from '../classes/responseclass';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(public http: HttpClient) { }
  baseUrl: string = "http://localhost:53504/Api/AngEmployeeReg/"
  createEmployee(employee: Employee): Observable<Responseclass> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<any>(this.baseUrl + '/GetEmployeeDataSave/',  
    employee);  
  } 

  
}
