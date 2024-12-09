package com.app.config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtProvider {
	SecretKey key=Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());
	
	//To generate JWT Token
	public String generateToken(Authentication auth) {
		String jwt=Jwts.builder()
				.setIssuedAt(new Date())
				.setExpiration(new Date(new Date().getTime()+846000000))
				//846000000 this is equal to 24 hrs means token will expire after 24 hours
				//Inside claim we have to give a key means email
				.claim("email",auth.getName())
				.signWith(key).compact();
		
		return jwt;
	}
	
	//To get a email from JWT token
	public String getEmailFromToken(String jwt) {
		//To extract bearere keyword we have to use substring 7.
		jwt=jwt.substring(7);
		
		Claims claims=Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
		
		//Claims will come in the form of object, hence to return and extract the email from it
		String email=String.valueOf(claims.get("email"));
		
		return email;
	}
	
		

}
