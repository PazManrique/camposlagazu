package com.lacelia.lacelia.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lacelia.lacelia.dao.ProductRepository;
import com.lacelia.lacelia.entity.Product;

@Service
public class ProductService {
    @Autowired
    ProductRepository repository;

    public List<Product> getAll() {
        return repository.findAll();
    }

    public Product findById(Long id) {
        return repository.findById(id).orElse(null);
    }

public Product saveProduct(Product newProduct) {
    return repository.save(newProduct);
}

/**
 * @param product
 * @return
 */
public Map<String,String> deleteProduct(Product product) {

    Map<String,String> message = new HashMap<>();
    message.put("message", "Product deleted successfully");
    repository.delete(product);
    return message;

/*     if (repository.findById().isPresent()){
       repository.deleteById(id);
       message.put("message", "OK");
       return message;
    }
    message.put("message", "error");
    return message; */

}

public Product updateProduct(Long id, Product newDataProduct) {

    return repository.findById(id)
     .map((product)->{
        product.setName(newDataProduct.getName());
        product.setDescription(newDataProduct.getDescription());
		product.setImage(newDataProduct.getImage());
        return repository.save(product);
     })
     .orElseGet(()->{
       return repository.save(newDataProduct);
     });

}
    
}
