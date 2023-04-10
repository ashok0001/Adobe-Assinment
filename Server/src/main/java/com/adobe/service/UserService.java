package com.adobe.service;

import java.util.List;

import com.adobe.exception.UserException;
import com.adobe.modal.User;

public interface UserService {
	
	public User findUserById(Integer userId) throws UserException;
	
	public User updatedUser(Integer userId, User user, String token) throws UserException;
	
	public void deleteUser(Integer userId) throws UserException;
	
	public Integer totalNumberOfUsers();
	
	public List<User> topActiveUser();
	
	public User getUserProfile(String jwt) throws UserException;
	
	public List<User> findAllUsers();

}
