import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
  .subscribe(response => {console.log(response)})
  }
}
