import { LoginService } from './../../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  l: boolean = false;
  text: string;
  userName: any;
  
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private service: LoginService
   
  ) { }

  ngOnInit(): void {
    this.service.getLoggedInName.subscribe(name => (this.l = name));
    this.service.getUserName.subscribe(name => (this.userName = name));
    if (this.l) {
      this.l = true;
    } else {
      this.l = JSON.parse(localStorage.getItem("loggedIn"));
      this.userName = JSON.parse(localStorage.getItem("name"));

      if (this.l) {
      } else {
        this.l = false;
      }
    }

  }
  
  post() {
    this.service.getLoggedInName.subscribe(name => (this.l = name));

    if (this.l) {
      this.router.navigate(["/post"]);
    } else {
      // this.toastr.error("You are Not Loggedin","Please Login First",
      //  10)
      this.toastr["warning"]("Please Log In first", "You are not logged In ");
      this.router.navigate(["/login"]);
    }
  }
  get() {
    this.service.getLoggedInName.subscribe(name => (this.l = name));

    if (this.l) {
      this.router.navigate(["/approve"]);
    } else {
      // this.toastr.error("You are Not Loggedin","Please Login First",
      // 10)
      this.toastr["warning"]("Please Log In first", "You are not logged In ");
      this.router.navigate(["/login"]);
    }
  }
  getAll() {
    this.service.getLoggedInName.subscribe(name => (this.l = name));

    if (this.l) {
      this.router.navigate(["/get"]);
    } else {
      // this.toastr.error("You are Not Loggedin","Please Login First",
      // 10)
      this.toastr["warning"]("Please Log In first", "You are not logged In ");
      this.router.navigate(["/login"]);
    }
  }

}



