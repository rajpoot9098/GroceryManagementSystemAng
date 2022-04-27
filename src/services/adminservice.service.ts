import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(public http: HttpClient) { }
  baseUrl: string = "http://localhost:53504/Api/LoadControl/"
  public GetMenu() {
    return this.http.get(this.baseUrl + "GetFillMenuModule")
  }

  public GetUserRole() {
    return this.http.get(this.baseUrl + "GetUserRole")
  }

  public GetCountry() {
    return this.http.get(this.baseUrl + "GetCountry")
  }

  public GetState(value: string) {
    return this.http.get(this.baseUrl + "GetState/?CountryId=" + value)
  }

  public GetCity(value: string) {
    return this.http.get(this.baseUrl + "GetCity/?StateId=" + value)
  }

  public GetCompany() {
    return this.http.get(this.baseUrl + "GetCompany")
  }

  public GetProductType() {
    return this.http.get(this.baseUrl + "GetProductType")
  }

  public GetProductCategory(value: string) {
    return this.http.get(this.baseUrl + "GetProductCategory/?TypeId=" + value)
  }
}

