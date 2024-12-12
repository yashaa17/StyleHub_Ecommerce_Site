package com.app.service;

import org.springframework.stereotype.Service;

import com.app.exception.CartItemException;
import com.app.exception.UserException;
import com.app.model.Cart;
import com.app.model.CartItem;
import com.app.model.Product;
import com.app.repository.CartItemRepository;

@Service
public class CartItemServiceImplementation implements CartItemService {
	private CartItemRepository cartItemRepository;

	@Override
	public CartItem createCartItem(CartItem cartItem) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public CartItem findCartItemById(Long CartItemId) throws CartItemException {
		// TODO Auto-generated method stub
		return null;
	}

}
