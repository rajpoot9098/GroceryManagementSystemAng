import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanymasterComponent } from './addcompanymaster/addcompanymaster.component';
import { AddproductcategoryComponent } from './addproductcategory/addproductcategory.component';
import { AddproductmasterComponent } from './addproductmaster/addproductmaster.component';
import { AddproducttypeComponent } from './addproducttype/addproducttype.component';
import { AddusermasterComponent } from './addusermaster/addusermaster.component';
import { AuthoGuardGuard } from './autho-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditcompanymasterComponent } from './editcompanymaster/editcompanymaster.component';
import { LoginComponent } from './login/login.component';
import { UpdateproductstockComponent } from './updateproductstock/updateproductstock.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent, pathMatch: 'full' },//, canActivate: [AuthoGuardGuard] 
  { path: 'Add_New_User', component: AddusermasterComponent, pathMatch: 'full' },//, canActivate: [AuthoGuardGuard]
  { path: 'Add_Company', component: AddcompanymasterComponent, pathMatch: 'full' },
  { path: 'Edit_Company', component: EditcompanymasterComponent, pathMatch: 'full' },
  { path: 'Add_Product', component: AddproductmasterComponent, pathMatch: 'full' },
  { path: 'Update_Product_Stock', component: UpdateproductstockComponent, pathMatch: 'full' },
  { path: 'Add_Product_Category', component: AddproductcategoryComponent, pathMatch: 'full' },
  { path: 'Add_Product_Type', component: AddproducttypeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthoGuardGuard]
})
export class AppRoutingModule { }
