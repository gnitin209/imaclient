import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UserModule } from './features/user/user.module';
import { ProductModule } from './features/product/product.module';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
