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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.exception.UserException;
import com.adobe.modal.User;
import com.adobe.response.ApiResponse;
import com.adobe.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	private UserService userService;
	public UserController() {
		// TODO Auto-generated constructor stub
		this.userService=userService;
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<User> findUserByIdHandler(@PathVariable Integer userId) throws UserException{
		
		User user=userService.findUserById(userId);
		
		return new ResponseEntity<User>(user,HttpStatus.OK);
		
	}
	@PutMapping("/{userId}")
	public ResponseEntity<ApiResponse> updateUserByIdHandler(@RequestBody User user, @RequestHeader("Authorization") String jwt, @PathVariable Integer userId) throws UserException{
		
		User updatedUser = userService.updatedUser(userId,user,jwt);
		
		ApiResponse res=new ApiResponse();
		res.setMessage("Account updated Successfully");
		res.setStatus(true);
		
		return new ResponseEntity<>(res,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/{userId}")
	public ResponseEntity<ApiResponse> deleteUserByIdHandler(@RequestBody User user, @RequestHeader("Authorization") String jwt, @PathVariable Integer userId) throws UserException{
		
		 userService.deleteUser(userId);
		
		ApiResponse res=new ApiResponse();
		res.setMessage("Account Deleted Successfully");
		res.setStatus(true);
		
		return new ResponseEntity<>(res,HttpStatus.OK);
		
	}
	
	@GetMapping("analytics/users")
	public ResponseEntity<Integer> totalNumberOfUserHandler() throws UserException{
		
		Integer totalUsers= userService.totalNumberOfUsers();
		
	
		
		return new ResponseEntity<>(totalUsers,HttpStatus.OK);
		
	}
	
	@GetMapping("analytics/users/top-active")
	public ResponseEntity<List<User>> topActiveUserHandler() throws UserException{
		
		List<User> users= userService.topActiveUser();
		
	
		
		return new ResponseEntity<>(users,HttpStatus.OK);
		
	}

}
