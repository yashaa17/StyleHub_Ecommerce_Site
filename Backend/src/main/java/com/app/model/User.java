package com.app.model;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.JoinColumn;



 @Entity
public class User {
	 @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
	 private Long id;
	 
	 private String firstName;
	 
	 private String lastName;
	 
	 private String email;
	 
	 private String role;
	 
	 private String mobileNo;
	 
	 /*
		 * In User:
		 * The @OneToMany annotation indicates that one User can have multiple Address
		 * entities. The mappedBy = "user" specifies that the user field in the Address
		 * entity is the mapping reference.
		 * CascadeType.All is for if you are deleting one user then all addresses of that user will be gone.
		 */
	 @OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	 private List<Address> address=new ArrayList<>();
	 
	 @Embedded
	 @ElementCollection
	 @CollectionTable(name="payment_information", joinColumns=@JoinColumn(name="user_id"))
	 private List<PaymentInformation> paymentInformation=new ArrayList<>();
	 
	 @JsonIgnore
	 @OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	 private List<Rating> ratings=new ArrayList<>();
	 
	 @JsonIgnore
	 @OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	 private List<Review> reviews=new ArrayList<>();
	 
	 private LocalDateTime createdAt;
	 
	 
	 public User() {
		 
	 }
	
	

}