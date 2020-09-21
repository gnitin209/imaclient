import { LoginService } from './../../../shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductService } from './../../../shared/models/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from './../../../shared/models/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  userEmail: any;
    name: boolean;
    l: boolean = false;
    message: any;
    product: Product = new Product();
    isDisabled: boolean;
    title = 'PostFurniture';
    registerForm: FormGroup;
    submitted = false;
    price: string;
    
  handleError(error: any): void {}
  progress: { percentage: number } = { percentage: 0 };
     formBuilder: FormBuilder=new FormBuilder;
    openForm(): any {
      document.getElementById('myForm').style.display = 'block';
    }
  
    constructor(
      private service: ProductService,
  
      private router: Router,
      private toastr: ToastrService,
      private serviceLogin: LoginService
  
    ) {}
  
    ngOnInit() {
      this.serviceLogin.getLoggedInName.subscribe(name => (this.l = name));
  
      //	this.service.getLoggedInName.subscribe(name => this.l=name);
  
      if (this.l != null) {
        this.name = true;
      } else {
        this.name = false;
        this.router.navigate(['/home']);
      }
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        vendor: ['', Validators.required],
        price: ['', Validators.required],
        quantity: ['', Validators.required],
        batchnumber: ['', Validators.required],
        date: ['', Validators.required],
        });
    }
  
    // convenience getter for easy access to form fields
    get f() {
      return this.registerForm.controls;
    }
  
    onSubmit() {
      console.log('hello');
  
      this.product.productName = this.registerForm.value.name;
      this.product.productVendor = this.registerForm.value.vendor;
      this.product.userEmail = JSON.parse(localStorage.getItem("userEmail"))
      this.product.productPrice = this.registerForm.value.price;
      this.product.productQuantity = this.registerForm.value.quantity;
      this.product.batchNumber = this.registerForm.value.batchnumber;
      this.product.batchDate = this.registerForm.value.date;
      console.log();
      try{
      this.service.addProduct(this.product).subscribe(
        data => {
            this.toastr.success('Furniture Adevertisment Uploaded Successfully');
          
          //this.selectedFiles = undefined;
      
      }, error => {
      //	window.location.reload();
        this.toastr.error(error.error);
      }
  
    );
    this.router.navigateByUrl('/home');
  }
    catch(error) {
    }
  
  
}}
