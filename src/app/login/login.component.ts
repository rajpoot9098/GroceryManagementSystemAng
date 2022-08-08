import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Userlogin } from '../classes/userlogin';
import { Employee } from '../classes/employee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public _loginUser:Userlogin;
  public _employee:Employee;
  
  constructor(
        private router: Router,
        public auth: AuthService
  ) {  
    this._loginUser=new Userlogin();
    this._employee=new Employee();
  }
  returnUrl:any;
  employeeData: any = [];
  ngOnInit(): void {
    localStorage.setItem("userName" , "");
    localStorage.setItem("token" , '');
  }

  onSubmit() {
    if(this._loginUser.EmailAddress=='')
    {
      Swal.fire({
        icon: 'warning',
        text:'User Name is required.'});
      return;
    }

    if(this._loginUser.Password=='')
    {
      Swal.fire({
        icon: 'warning',
        text:'Password is required.'});
      return;
    }
    this.auth.login(this._loginUser)
      .subscribe(res => {
        console.log(res);
        if(res.successcode=="1"){  
          debugger
          this.employeeData=res.data;          
          // Swal.fire({
            
          //   icon: 'success',
          //   text:'Welcome '+this.employeeData[0].EmployeeName});
            localStorage.setItem("userName" , this.employeeData[0].EmployeeName);
            localStorage.setItem("token" , "true");
          this.router.navigate(['/Dashboard']);
        }
        else
        {
          Swal.fire({
            icon: 'error',
            text:'Invailid user name or password.'});
          return;
        }
      });
  }

}
