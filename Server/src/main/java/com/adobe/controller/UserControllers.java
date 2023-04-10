package com.adobe.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.exception.UserException;
import com.adobe.modal.User;
import com.adobe.response.ApiResponse;
import com.adobe.response.UserAnalyticsResponse;
import com.adobe.service.UserService;

@RestController
public class UserControllers {

	private UserService userService;
	public UserControllers(UserService userService) {
		
		this.userService=userService;
	}
	
	
	@GetMapping("/users/req")
	public ResponseEntity<User> getReqUserProfileHandler(@RequestHeader("Authorization")String jwt) throws UserException{
		
		
		
		User user=userService.getUserProfile(jwt);
		
		
		return new ResponseEntity<User>(user,HttpStatus.OK);
		
		
	}
	@GetMapping("/users")
	public ResponseEntity<List<User>> findAllUsersHandler() throws UserException{
		
		
		
		List<User> user=userService.findAllUsers();
		
		
		return new ResponseEntity<List<User>>(user,HttpStatus.OK);
		
		
	}
	
	@GetMapping("/users/{userId}")
	public ResponseEntity<User> findUserByIdHandler(@PathVariable Integer userId) throws UserException{
		
		System.out.println("get user by id");
		
//		User user=new User();
//		user.setEmail("demo@gmai.com");
		
		User user=userService.findUserById(userId);
		
		return new ResponseEntity<User>(user,HttpStatus.OK);
		
		
	}
	@PutMapping("/users/{userId}")
	public ResponseEntity<ApiResponse> updateUserByIdHandler(@RequestBody User user, @RequestHeader("Authorization") String jwt, @PathVariable Integer userId) throws UserException{
		System.out.println("user - "+user.getBio()+" - id - "+userId+" - jwt - "+jwt);
		
		User updatedUser = userService.updatedUser(userId,user,jwt);
		
		ApiResponse res=new ApiResponse();
		res.setMessage("Account updated Successfully");
		res.setStatus(true);
		
		return new ResponseEntity<>(res,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/users/{userId}")
	public ResponseEntity<ApiResponse> deleteUserByIdHandler(@RequestHeader("Authorization") String jwt, @PathVariable Integer userId) throws UserException{
		
		 userService.deleteUser(userId);
		
		ApiResponse res=new ApiResponse();
		res.setMessage("Account Deleted Successfully");
		res.setStatus(true);
		
		return new ResponseEntity<>(res,HttpStatus.OK);
		
	}
	
	@GetMapping("analytics/users")
	public ResponseEntity<UserAnalyticsResponse> totalNumberOfUserHandler() throws UserException{
		
		Integer totalUsers= userService.totalNumberOfUsers();
		System.out.println("number of users -- "+totalUsers);
	
		UserAnalyticsResponse res=new UserAnalyticsResponse();
		res.setStatus(true);
		res.setTotal_users(totalUsers);
		
		System.out.println(" res---- "+res);
		
		return new ResponseEntity<UserAnalyticsResponse>(res,HttpStatus.OK);
		
	}
	
	@GetMapping("analytics/users/top-active")
	public ResponseEntity<List<User>> topActiveUserHandler() throws UserException{
		
		List<User> users= userService.topActiveUser();
		
	
		
		return new ResponseEntity<>(users,HttpStatus.OK);
		
	}
}
