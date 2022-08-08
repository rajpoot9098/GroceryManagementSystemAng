import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/services/adminservice.service';
import { Employee } from '../classes/employee';
import { EmployeeserviceService } from '../services/employeeservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
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
  addForm: any;
  submitted = false;

  ngOnInit(): void {

    // this.addForm =  this.formBuilder.group({
    //   EmployeeFirstName: ['', Validators.required],
    //   EmployeeLastName: ['', Validators.required],
    //   MobileNo: ['', Validators.required, Validators.maxLength(10)],
    //   Password: ['', Validators.required],
    //   ConfirmPassword: ['', Validators.required],
    //   EmailAddress: ['', Validators.required, Validators.email]
    // }
    // );
  }

  onSubmit() {    
    
    this.submitted = true;
    // var Contact = new String(this.addForm.controls['MobileNo'].value) 
    // if(this.addForm.controls['EmployeeFirstName'].value=='')
    // {
    //   Swal.fire({
    //     icon: 'warning',
    //     text:'First Name is required.'});
    //   return;
    // }

    // if(this.addForm.controls['EmployeeLastName'].value=='')
    // {
    //   Swal.fire({
    //     icon: 'warning',
    //     text:'Last Name is required.'});
    //   return;
    // }

    // if(this.addForm.controls['MobileNo'].value=='')
    // {
    //   Swal.fire({
    //     icon: 'warning',
    //     text:'Contact is required.'});
    //   return;
    // }
    // else if(Contact.length!=10)
    // {
    //   Swal.fire({
    //     icon: 'warning',
    //     text:'Please input a valid Contact Number.'});
    //   return;
    // }

    // const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // if(this.addForm.controls['EmailAddress'].value=='')
    // {
    //   Swal.fire({
    //     icon: 'warning',
    //     text:'Email is required.'});
    //   return;
    // }
    // else if(!regularExpression.test(this.addForm.controls['EmailAddress'].value))
    // {
    //   Swal.fire({
    //     icon: 'warning',
    //     text:'Please input a valid email.'});
    //   return;
    // }

    // if(this.addForm.controls['Password'].value=='')
    // {
    //   Swal.fire({
    //     icon: 'warning',
    //     text:'Password is required.'});
    //   return;
    // }

    // if(this.addForm.controls['ConfirmPassword'].value=='')
    // {
    //   Swal.fire({
    //     icon: 'warning',
    //     text:'Confirm Password is required.'});
    //   return;
    // }
    // else if(this.addForm.controls['Password'].value!=this.addForm.controls['ConfirmPassword'].value)
    // {
    //   Swal.fire({
    //     icon: 'warning',
    //     text:'Confirm Password is not match with password.'});
    //   return;
    // }
    debugger
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
          this.addForm.reset();
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
    this.addForm.reset();
  }

}


