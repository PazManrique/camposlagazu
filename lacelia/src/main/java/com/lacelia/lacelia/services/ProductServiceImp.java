// package com.lacelia.lacelia.services;

// import java.util.List;
// import java.util.Optional;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import com.lacelia.lacelia.dao.ProductRepository;
// import com.lacelia.lacelia.entity.Product;

// @Service
// public class ProductServiceImp implements ProductService{

//     private ProductRepository productRepository;
    
//     @Autowired
// public ProductServiceImp (ProductRepository theProductRepository) {
//     productRepository = theProductRepository;
// }

//     @Override
//     public List<Product> findAll() {
//                 return this.productRepository.findAll();
//     }

//     @Override
// 	public Product findById(int theId) {
// 		Optional<Product> result = productRepository.findById(theId);
		
// 		Product theProduct = null;
		
// 		if (result.isPresent()) {
// 			theProduct = result.get();
// 		}
// 		else {
// 			throw new RuntimeException("Did not find product id - " + theId);
// 		}
		
// 		return theProduct;
// 	}

// 	@Override
// 	public void save(Product theProduct) {
// 		productRepository.save(theProduct);
// 	}

// 	@Override
// 	public void deleteById(int theId) {
// 		productRepository.deleteById(theId);
// 	}
	    
// }
