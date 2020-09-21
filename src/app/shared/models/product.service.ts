import { AppConstants } from './AppConstants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
	
	}
	
	public addProduct(product) {
		return this.http.post( AppConstants.baseURL+'product/addproduct', product, {
			responseType: 'text' as 'json'
		});
	}

}
