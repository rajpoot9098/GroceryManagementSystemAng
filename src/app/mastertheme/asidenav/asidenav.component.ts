import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/services/adminservice.service';

@Component({
  selector: 'app-asidenav',
  templateUrl: './asidenav.component.html',
  styles: [
  ]
})
export class AsidenavComponent implements OnInit {

  constructor(private adminservice: AdminserviceService) { }
  manu: any = [];
  userName: any = "";

  ngOnInit(): void {
    this.adminservice.GetMenu().subscribe(data => {
      console.log(data);
      this.manu = data;
    });
    this.userName = localStorage.getItem("userName")
  }

}
