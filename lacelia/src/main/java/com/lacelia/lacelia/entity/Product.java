package com.lacelia.lacelia.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "product")
public class Product {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "description", nullable = false)
    private String description;
	@Column(name = "image", nullable = false)
    private String image;

    public Product() {
    }

    public Product(Long id, String name, String description, String image) {
        this.id = id;
        this.name = name;
        this.description = description;
		this.image  = image;
    }
	
	public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

	public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
}






	
