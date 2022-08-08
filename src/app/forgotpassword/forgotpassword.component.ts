import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Userlogin } from '../classes/userlogin';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  public _loginUser: Userlogin;
  constructor(
    private router: Router,
    public auth: AuthService
  ) {
    this._loginUser = new Userlogin();
  }
  returnUrl: any;
  ngOnInit(): void {


  }

  onSubmit() {
    debugger
    if (this._loginUser.EmailAddress == '') {
      Swal.fire({
        icon: 'warning',
        text: 'User Name is required.'
      });
      return;
    }

    if (this._loginUser.MobileNo == '') {
      Swal.fire({
        icon: 'warning',
        text: 'Mobile No is required.'
      });
      return;
    }

    if (this._loginUser.Password == '') {
      Swal.fire({
        icon: 'warning',
        text: 'Password is required.'
      });
      return;
    }

    let pattern = new RegExp("^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[-])(?=.[0-9]))).{8,}$"); //Regex: At least 8 characters with at least 2 numericals

    if (!pattern.test(this._loginUser.Password)) {
      Swal.fire({
        icon: 'warning',
        text: 'Password must be 8 characters with at least 1 Upper Case, 1 lower case, 1 numeric character and 1 special character.'
      });
      return;
    }

    if (this._loginUser.Password != this._loginUser.ConfirmPassword) {
      Swal.fire({
        icon: 'warning',
        text: 'Password and Confirm Password miss match.'
      });
      return;
    }

    this.auth.forgotPassword(this._loginUser)
      .subscribe(data => {
        console.log(data);
        if (data.successcode == "1") {
          Swal.fire({
            icon: 'success',
            text: data.msg
          });
          this.router.navigate(['/login']);
        }
        else {
          Swal.fire({
            icon: 'error',
            text: data.msg
          });
          return;
        }
      });
  }

  numericOnly(event:any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

}

