import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './mastertheme/topnav/topnav.component';
import { AsidenavComponent } from './mastertheme/asidenav/asidenav.component';
import { FooterComponent } from './mastertheme/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddusermasterComponent } from './addusermaster/addusermaster.component';
import { LoginComponent } from './login/login.component';
import { AddcompanymasterComponent } from './addcompanymaster/addcompanymaster.component';
import { AddproductmasterComponent } from './addproductmaster/addproductmaster.component';
import { UpdateproductstockComponent } from './updateproductstock/updateproductstock.component';
import { AddproductcategoryComponent } from './addproductcategory/addproductcategory.component';
import { AddproducttypeComponent } from './addproducttype/addproducttype.component';
import { EditcompanymasterComponent } from './editcompanymaster/editcompanymaster.component';
@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    AsidenavComponent,
    FooterComponent,
    DashboardComponent,
    AddusermasterComponent,
    LoginComponent,
    AddcompanymasterComponent,
    AddproductmasterComponent,
    UpdateproductstockComponent,
    AddproductcategoryComponent,
    AddproducttypeComponent,
    EditcompanymasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
