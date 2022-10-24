import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) {}
  admin(){
    this.router.navigate(["show"])
  }

  user(){
    this.router.navigate(["user"])
  }
 
  ngOnInit(): void {
  }

}
