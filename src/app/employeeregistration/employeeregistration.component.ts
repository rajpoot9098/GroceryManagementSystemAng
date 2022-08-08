import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/services/adminservice.service';
import { Employee } from '../classes/employee';
import { EmployeeserviceService } from '../services/employeeservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})

export class EmployeeregistrationComponent implements OnInit {
  submitted: boolean = false
public employee:Employee;
  constructor
  (
    private formBuilder: FormBuilder, 
    private router: Router, 
    private _Activatedroute: ActivatedRoute, 
    private adminservice: AdminserviceService, 
    private empservice: EmployeeserviceService    
  ) {
    this.employee=new Employee();
   }
  lstGetUserRole: any = [];
  lstCountry: any = [];
  lstState: any = [];
  lstCity: any = [];
  registrationForm!: FormGroup;
  chkPassword:any="";
  chkMail:any="";
  chkFname:any="";
  chkLname:any="";
  chkMobile:any="";
  chkConfiramPassword:any="";
  
  ngOnInit(): void {

    this.registrationForm =  this.formBuilder.group({
      EmployeeFirstName: ['', Validators.required],
      EmployeeLastName: ['', Validators.required],
      MobileNo: ['', Validators.required, Validators.maxLength(10)],
      EmailAddress: ['', Validators.required, Validators.email],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    }
    );
  }

  get onSubmitFunction(){
    return this.registrationForm.controls;
  }

  onSubmit() {    
    
    this.submitted = true;
    if(this.registrationForm.invalid){
      return;
    }

    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.submitted=true;
        if(regularExpression.test(this.registrationForm.controls['EmailAddress'].value)){
          this.chkMail = '';
        }else{
          this.chkMail = 'Please enter valid email.'
          return;
        }

        let pattern = new RegExp("^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[-])(?=.[0-9]))).{8,}$"); //Regex: At least 8 characters with at least 2 numericals
    
        if(this.registrationForm.controls['Password'].value==''||pattern.test(this.registrationForm.controls['Password'].value)){
          this.chkPassword = '';
        }else{
          this.chkPassword = 'Password must be 8 characters with at least 1 Upper Case, 1 lower case, 1 numeric character and 1 special character.'
          return;
        }

        if(this.registrationForm.controls['Password'].value!=this.registrationForm.controls['ConfirmPassword'].value){
          this.chkConfiramPassword = 'Password and Confirm Password miss match.'
          return;
        }

    this.submitted = false;
    Swal.fire({  
      title: 'Are you sure want to save?',  
      // text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, save it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => { 
      
      
      if (result.value) {  
        this.empservice.createEmployee(this.employee)
      .subscribe(data => {
        console.log(data);
        if(data.successcode=="1"){          
          Swal.fire(  
            'Saved!',  
            'Your profile data has been saved.',  
            'success'  
          )  
          this.registrationForm.reset();
        }
        else{
          debugger
          Swal.fire(  
            'Not Saved!',  
            data.msg,  
            'error'  
          ) 
        }
        // this.addForm.reset();
      });
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your imaginary file is safe :)',  
          'error'  
        )  
        // this.addForm.reset();
      }  
    })  
  }

  ClearData() {
    this.registrationForm.reset();
  }


  numericOnly(event:any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  onPasswordChange() {
    this.submitted=true;
    let pattern = new RegExp("^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[-])(?=.[0-9]))).{8,}$"); //Regex: At least 8 characters with at least 2 numericals
    
        if(this.registrationForm.controls['Password'].value==''||pattern.test(this.registrationForm.controls['Password'].value)){
          this.chkPassword = '';
        }else{
          this.chkPassword = 'Password must be 8 characters with at least 1 Upper Case, 1 lower case, 1 numeric character and 1 special character.'
        }
  }

  onConfirmPasswordChange() {
    this.submitted=true;
    if(this.registrationForm.controls['Password'].value==this.registrationForm.controls['ConfirmPassword'].value){
          this.chkConfiramPassword = '';
        }else{
          this.chkConfiramPassword = 'Password and Confirm Password miss match.'
        }
  }

  onEmailChange() {
    
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.submitted=true;
        if(this.registrationForm.controls['EmailAddress'].value==''||regularExpression.test(this.registrationForm.controls['EmailAddress'].value)){
          this.chkMail = '';
        }else{
          this.chkMail = 'Please enter valid email.'
        }
  }

}


