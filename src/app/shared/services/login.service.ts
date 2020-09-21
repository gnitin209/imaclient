import { Injectable } from '@angular/core';
import { AppConstants } from './../models/AppConstants';
import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  name: any;
	@Output() getLoggedInName: EventEmitter<string> = new EventEmitter();
	@Output() getUserName: EventEmitter<string> = new EventEmitter();

	email: any;
	constructor(private http: HttpClient) {}

	login(userEmail, userPassword) {
		return this.http.get(
			AppConstants.baseURL + 'user/login?userEmail=' + userEmail + '&userPassword=' + userPassword,{responseType:'text' as 'json'});

	}

	public setUserName(): void {
		this.email = JSON.parse(localStorage.getItem('userEmail'));
		this.name = JSON.parse(localStorage.getItem('name'));
		this.getLoggedInName.emit(this.email);
		this.getUserName.emit(this.name);
	}

	public getUser(email): any {
		console.log('service' + email);
		return this.http.get(AppConstants.baseURL + 'user/loginGmail?userEmail=' + email);
	}

}
