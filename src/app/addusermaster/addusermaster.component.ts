import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/services/adminservice.service';

@Component({
  selector: 'app-addusermaster',
  templateUrl: './addusermaster.component.html',
  styleUrls: ['./addusermaster.component.css']
})
export class AddusermasterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private _Activatedroute: ActivatedRoute, private adminservice: AdminserviceService) { }
  lstGetUserRole: any = [];
  lstCountry: any = [];
  lstState: any = [];
  lstCity: any = [];
  addForm: any;

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      UserRoleId: ['', Validators.required],
      LoginUserName: ['', Validators.required],
      ContectNumber: ['', Validators.required, Validators.max(10)],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      DateOfBirth: ['', Validators.required],
      EmailId: ['', Validators.required, Validators.email],
      FileName: ['', Validators.required],
      AddressLine1: ['', Validators.required],
      AddressLine2: ['', Validators.required],
      CountryId: ['', Validators.required],
      StateId: ['', Validators.required],
      CityId: ['', Validators.required]
    });

    this.adminservice.GetUserRole().subscribe(data => {
      this.lstGetUserRole = data;
    });

    this.adminservice.GetCountry().subscribe(data => {
      this.lstCountry = data;
    });

  }
  GetState(value: string) {
    this.adminservice.GetState(value).subscribe(data => {
      this.lstState = data;
      this.lstCity = "";
    });
  }

  GetCity(value: string) {
    this.adminservice.GetCity(value).subscribe(data => {
      this.lstCity = data;
    });
  }

  onSubmit() {
    debugger
    console.log(this.addForm.value);
    // console.log('Create fire');
    // this.empService.createUser(this.addForm.value)
    //   .subscribe(data => {
    //     this.router.navigate(['list-emp']);
    //   },
    //     error => {
    //       alert(error);
    //     });
  }

}


