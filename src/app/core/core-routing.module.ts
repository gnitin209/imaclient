import { HomeComponent } from './home/home.component';
import { LoginComponent } from './../features/user/login/login.component';
import { ApproveProductComponent } from './../features/product/approve-product/approve-product.component';
import { GetProductComponent } from './../features/product/get-product/get-product.component';
import { AddProductComponent } from './../features/product/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  { path: "post", component: AddProductComponent },
  { path: "get", component: GetProductComponent },
    
  { path: "approve", component: ApproveProductComponent },
    
  { path: "login", component: LoginComponent }
  ,
    {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
