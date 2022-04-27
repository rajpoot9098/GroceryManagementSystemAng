import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/services/adminservice.service';

@Component({
  selector: 'app-addproductmaster',
  templateUrl: './addproductmaster.component.html',
  styleUrls: ['./addproductmaster.component.css']
})
export class AddproductmasterComponent implements OnInit {

  constructor(private adminservice: AdminserviceService) { }
  lstCompany: any = [];
  lstType: any = [];
  lstCategory: any = [];

  ngOnInit(): void {
    this.adminservice.GetCompany().subscribe(data => {
      this.lstCompany = data;
    });
    this.adminservice.GetProductType().subscribe(data => {
      this.lstType = data;
    });
  }

  GetProductCategory(value: string) {
    debugger
    this.adminservice.GetProductCategory(value).subscribe(data => {
      this.lstCategory = data;
    });
  }
}
