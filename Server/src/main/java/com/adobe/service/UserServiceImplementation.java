package com.adobe.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.adobe.config.JwtTokenProvider;
import com.adobe.exception.UserException;
import com.adobe.modal.Post;
import com.adobe.modal.User;
import com.adobe.repository.UserRepository;
import com.adobe.util.UserUtil;


@Service
public class UserServiceImplementation implements UserService{
	
	private UserRepository userRepository;
	private JwtTokenProvider jwtTokenProvider;
	
	
	
	public UserServiceImplementation(UserRepository userRepository,JwtTokenProvider jwtTokenProvider) {
		this.userRepository = userRepository;
		this.jwtTokenProvider=jwtTokenProvider;
		
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
		
		oldUser.setUpdatedAt(LocalDateTime.now());
		return userRepository.save(oldUser);
	}

	@Override
	public void deleteUser(Integer userId) throws UserException {
		
		User user=findUserById(userId);
		
		userRepository.delete(user);
		// TODO Auto-generated method stub
		
	}

	@Override
	public Integer totalNumberOfUsers() {
		List<User> users=userRepository.findAll();
		
		return users.size();
	}

	@Override
	public List<User> topActiveUser() {
		List<User> users = userRepository.findAll();
		
		UserUtil.sortUserByNumberOfPost(users);
		
		int numUsers = Math.min(users.size(), 5); 
		List<User> topUsers = users.subList(0, numUsers);
		
		return topUsers;
	}

	@Override
	public User getUserProfile(String jwt) throws UserException {
		// TODO Auto-generated method stub
	
		
		System.out.println("email token - "+jwt);

	    String email = jwtTokenProvider.getEmailFromToken(jwt);
	    
	    System.out.println("email token - "+email);
	    
	    Optional<User> opt = userRepository.findByEmail(email);
	    
	    if(opt.isPresent()) {

	    	
	    	return opt.get();
	    	
	    }
		
	    throw new UserException("user not exist with email : "+email);

	}

	
}
