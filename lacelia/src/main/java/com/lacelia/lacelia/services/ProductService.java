package com.lacelia.lacelia.services;

import java.util.List;

import com.lacelia.lacelia.entity.Product;

public interface ProductService {
    
    public List<Product> findAll();
	
	public Product findById(int theId);
	
	public void save(Product theProduct);
	
	public void deleteById(int theId);
    
}
