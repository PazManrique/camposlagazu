import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { catchError, Observable, throwError } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {





constructor(private http:HttpClient) { }
  /* getProductList(){
    return this.httpClient.get<Product[]>(this.baseUrl);
  } */

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  getProduct (id: number): Observable<Product> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
    catchError(this.handleError)
    );
    }


  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}`, data)
}

updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${baseUrl}/${id}`, data)
}

deleteData(data: any): Observable<any> {
  return this.http.delete(`${baseUrl}`, data)
}
}
