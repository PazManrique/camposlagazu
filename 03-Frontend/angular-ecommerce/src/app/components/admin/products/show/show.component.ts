import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService, private router:Router) { }

  Edit(){
    this.router.navigate(["edit"])
  }
  Delete(){
    this.router.navigate(["delete"])
  }



  ngOnInit(): void {
    this.listProducts()}
    
    listProducts(){
    this.productService.getProductList().subscribe(
      data => {this.products = data}
    )
  }

 


}
