package com.lacelia.lacelia.controllers;

import com.lacelia.lacelia.entity.Product;
import com.lacelia.lacelia.services.ProductService;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "*")

@RequestMapping(path = "/api")
public class ProductController {

   @Autowired
    ProductService productSevice;
     

   @GetMapping(value="/products")
     public  List<Product> getAll() {
       return productSevice.getAll();
     }

     @GetMapping(value = "/products/{id}")
     public Product findById(@PathVariable Long id) {
         return productSevice.findById(id);
     }

    @PostMapping(value="/products/create")
     public Product saveProduct(@RequestBody Product newProduct ) {
      Product product = productSevice.saveProduct(newProduct);
      return product;
     }

     @DeleteMapping(path = "/products/delete")
    public Map<String,String> deleteProduct(@RequestBody Product product ) {
     Map<String,String> message = productSevice.deleteProduct(product);
     return message;
     // cambiar el service
    }

  
   @PutMapping(path = "/products/{id}")
   public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
    return productSevice.updateProduct(id, product);
    
}  
   

}




	