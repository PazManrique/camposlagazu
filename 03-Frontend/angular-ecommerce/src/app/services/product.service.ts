import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {


baseUrl = 'http://localhost:8080/api/products';


constructor(private httpClient:HttpClient) { }
  getProductList(){
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
  }
