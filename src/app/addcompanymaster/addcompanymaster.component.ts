import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/services/adminservice.service';

@Component({
  selector: 'app-addcompanymaster',
  templateUrl: './addcompanymaster.component.html',
  styleUrls: ['./addcompanymaster.component.css']
})
export class AddcompanymasterComponent implements OnInit {

  constructor(private adminservice: AdminserviceService) { }
  lstCountry: any = [];
  lstState: any = [];
  lstCity: any = [];

  ngOnInit(): void {
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
}
