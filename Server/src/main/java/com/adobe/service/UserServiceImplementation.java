package com.adobe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.adobe.exception.UserException;
import com.adobe.modal.User;
import com.adobe.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService{
	
	private UserRepository userRepository;
	
	
	public UserServiceImplementation(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public User findUserById(Integer userId) throws UserException {
		Optional<User> opt=userRepository.findById(userId);
		
		
		
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new UserException("user not found with id "+userId);
	}

	@Override
	public User updatedUser(Integer userId, User user, String token) throws UserException {
		
		User oldUser=findUserById(userId);
		
		
		
		if(user.getName()!=null) {
			
			oldUser.setName(user.getName());
			
		}
		if(user.getBio()!=null) {
			oldUser.setBio(user.getBio());
		}
		
		
		return userRepository.save(oldUser);
	}

	@Override
	public void deleteUser(Integer userId) throws UserException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Integer totalNumberOfUsers() {
		List<User> users=userRepository.findAll();
		
		return users.size();
	}

	@Override
	public List<User> topActiveUser() {
		// TODO Auto-generated method stub
		return null;
	}

}
