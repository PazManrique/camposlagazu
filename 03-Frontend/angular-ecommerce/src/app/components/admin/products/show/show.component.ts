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
id: any;
  constructor(private productService: ProductService, private router:Router) { }

  Edit(){
    this.router.navigate(["edit"])
  }
  delete() {
    this.productService.deleteData(Product)
      .subscribe(response => {
        console.log(response);
      })
  }


  add(){
    this.router.navigate(["add"])
  }
  
  ngOnInit(): void {
    this.listProducts()}
    
    listProducts(){
    this.productService.getAll().subscribe(
      data => {this.products = data}
    )

  
  }

  submitData(value: any) {
    let body = {
      id: value.id,
      name: value.name,
      description: value.description,
      image: value.image
    }

    this.productService.deleteData(body)
  .subscribe(response => {console.log(response)})
  } 


}
