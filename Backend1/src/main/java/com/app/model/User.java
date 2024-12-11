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
	 
	 private String password;
	 
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


	public User(Long id, String firstName, String lastName, String email, String role, String mobileNo,
			String password,List<Address> address, List<PaymentInformation> paymentInformation, List<Rating> ratings,
			List<Review> reviews, LocalDateTime createdAt) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.role = role;
		this.mobileNo = mobileNo;
		this.password = password;
		this.address = address;
		this.paymentInformation = paymentInformation;
		this.ratings = ratings;
		this.reviews = reviews;
		this.createdAt = createdAt;
	}




	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public String getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}


	public List<Address> getAddress() {
		return address;
	}


	public void setAddress(List<Address> address) {
		this.address = address;
	}


	public List<PaymentInformation> getPaymentInformation() {
		return paymentInformation;
	}


	public void setPaymentInformation(List<PaymentInformation> paymentInformation) {
		this.paymentInformation = paymentInformation;
	}


	public List<Rating> getRatings() {
		return ratings;
	}


	public void setRatings(List<Rating> ratings) {
		this.ratings = ratings;
	}


	public List<Review> getReviews() {
		return reviews;
	}


	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}


	public LocalDateTime getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}


	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}


	public void setPassword(String password) {
		// TODO Auto-generated method stub
		this.password = password;
		
	}
	 
	 
	
	

}