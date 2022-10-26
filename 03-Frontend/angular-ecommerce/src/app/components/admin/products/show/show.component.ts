import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() currentProduct: Product = {
    id:'',
    name: '',
    description: '',
    image: ''
  };
  message = '';
  product: Product = new Product();
  products: Product[] = [];
id: any;
  constructor(private productService: ProductService, private router:Router, private route: ActivatedRoute) { }


  deleteP(): void {
    this.productService.delete(this.currentProduct.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/show']);
        },
        error: (e) => console.error(e)
      });
  }


  add(){
    this.router.navigate(["add"])
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
    
    this.listProducts()}
    
    listProducts(){
    this.productService.getAll().subscribe(
      data => {this.products = data}
    )

  
  }
  handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

  deleteProduct() {


  }
 

}
