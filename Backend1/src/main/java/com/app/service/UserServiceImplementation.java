package com.app.service;

import org.springframework.stereotype.Service;

import com.app.exception.UserException;
import com.app.model.User;

@Service
public class UserServiceImplementation implements UserService {

	@Override
	public User findUserById(Long userId) throws UserException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		// TODO Auto-generated method stub
		return null;
	}

}
