import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) {}
  Show(){
    this.router.navigate(["show"])
  }
  Add(){
    this.router.navigate(["add"])
  }



  ngOnInit(): void {
  }

}
