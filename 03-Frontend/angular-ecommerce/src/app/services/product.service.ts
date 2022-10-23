import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {





constructor(private http:HttpClient) { }
  /* getProductList(){
    return this.httpClient.get<Product[]>(this.baseUrl);
  } */

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  get(id: any): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/${id}`);
  }



  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}`, data)
}

updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${baseUrl}/${id}`, data)
}

deleteData(id: string): Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`)
}



  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  }
