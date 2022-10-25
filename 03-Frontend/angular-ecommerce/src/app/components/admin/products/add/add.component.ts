import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  submitData(value: any) {
    let body = {
      name: value.name,
      description: value.description,
      image: value.image
    }

    this.productService.create(body)
  .subscribe(response => {console.log(response)}),
  this.router.navigate(["show"])  
  }

  
}
