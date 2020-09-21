import { LoginService } from './../../../shared/services/login.service';
import { LoginDto } from './../../../shared/models/LoginDTO';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes, RouterModule, Router } from "@angular/router";
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  l: boolean = false;
  userLoginMessage: String;
  userEmail: String;
  userPassword: String
  message: any;
  loginForm: FormGroup;
  logi: LoginDto;
  loggedIn: boolean;
  auth2: any;
  

  constructor(
    private services: LoginService,
    private router: Router,
    private toastr: ToastrService,
  ) { }


  // handleError(error: any): void { }
  // @ViewChild('loginRef', { static: true }) loginElement: ElementRef;

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        userEmail: new FormControl(Validators.required, Validators.email),
        userPassword: new FormControl(Validators.required),

      });

  }
  login() {

    console.log(this.loginForm.value.userEmail);
    if (this.loginForm.invalid) {
    alert('Please enter valid details');
    return;
    }

    this.userPassword = this.loginForm.value.userPassword;
    this.userEmail = this.loginForm.value.userEmail;
    console.log("password" + this.userPassword + " user name " + this.userEmail);

    this.services.login(this.userEmail, this.userPassword).subscribe(data => {
    this.message = data;
    console.log(this.message);
    
    if (this.message === "false")
    {
    this.userLoginMessage = "Invalid User credetials";

    // localStorage.setItem('name', JSON.stringify(this.user.firstName));
    }
    else {
    localStorage.setItem('userEmail', JSON.stringify(this.userEmail));
    localStorage.setItem('name', JSON.stringify(this.message));
    console.log(this.message);
    localStorage.setItem('loggedIn', JSON.stringify(true));
    console.log("saved");
    this.router.navigateByUrl("/home");
    this.services.setUserName();


    }
    });
    }

  


}
