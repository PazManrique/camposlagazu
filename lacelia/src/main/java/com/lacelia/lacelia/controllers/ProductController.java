package com.lacelia.lacelia.controllers;

import com.lacelia.lacelia.entity.Product;
import com.lacelia.lacelia.services.ProductService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin ("http://localhost:4200")
@RestController
@RequestMapping("/api")

public class ProductController {
       private ProductService productService;
        @Autowired

        public ProductController(ProductService theProdutService) {
            productService = theProdutService;
        }


    @GetMapping("/products")
    public List<Product>findAll(){
        return productService.findAll();
    }

    @GetMapping("/products/{productId}")
	public Product getProduct(@PathVariable int productId) {
		
		Product theProduct = productService.findById(productId);
		
		if (theProduct == null) {
			throw new RuntimeException("Product id not found - " + productId);
		}
		
		return theProduct;
	}
	
	// add mapping for POST /Products - add new Product
	
	@PostMapping("/Products")
	public Product addProduct(@RequestBody Product theProduct) {
		
		
		theProduct.setId(0);
		
		productService.save(theProduct);
		
		return theProduct;
	}
	
	// add mapping for PUT /Products - update existing Product
	
	@PutMapping("/Products")
	public Product updateProduct(@RequestBody Product theProduct) {
		
		productService.save(theProduct);
		
		return theProduct;
	}
	
	// add mapping for DELETE /Products/{productId} - delete Product
	
	@DeleteMapping("/Products/{productId}")
	public String deleteProduct(@PathVariable int productId) {
		
		Product tempProduct = productService.findById(productId);
		
		// throw exception if null
		
		if (tempProduct == null) {
			throw new RuntimeException("Product id not found - " + productId);
		}
		
		productService.deleteById(productId);
		
		return "Deleted Product id - " + productId;
	}
	
	


}












	
	// add mapping for GET /Products/{productId}
	
	

