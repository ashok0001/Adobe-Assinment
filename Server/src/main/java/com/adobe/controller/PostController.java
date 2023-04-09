package com.adobe.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.adobe.exception.PostException;
import com.adobe.exception.UserException;
import com.adobe.modal.Post;
import com.adobe.modal.User;
import com.adobe.repository.PostRepository;
import com.adobe.request.PostRequest;
import com.adobe.response.ApiResponse;
import com.adobe.service.PostService;
import com.adobe.service.UserService;




@RestController("/posts")
public class PostController {
	
private PostRepository postRepository;
	
	private UserService userService;
	private PostService postService;
	
	public PostController(PostRepository postRepository,UserService userService,PostService postService) {
		
		this.postRepository=postRepository;
		this.userService=userService;
		this.postService=postService;
		
	}
	
	
	
	@PostMapping("/")
	public ResponseEntity<Post> createPostHandler(@RequestBody PostRequest postReuest,@RequestHeader("Authorization") String token) throws UserException{
		
		User user=userService.getUserProfile(token);
		
		postReuest.setUserId(user.getId());
		
		Post createdPost = postService.createPost(postReuest);
		
		return new ResponseEntity<Post>(createdPost, HttpStatus.CREATED);
	}
	
	@PutMapping("/{postId}/like")
	public ResponseEntity<Post> likePostHandler(@PathVariable("postId") Integer postId, @RequestHeader("Authorization") String token) throws UserException, PostException{
		
		User user=userService.getUserProfile(token);
		
		Post updatedPost=postService.likePost(postId, user.getId());
		
		return new ResponseEntity<Post>(updatedPost,HttpStatus.OK);
		
	}
	
	
	@PutMapping("/{postId}/unlike")
	public ResponseEntity<Post> unLikePostHandler(@PathVariable("postId") Integer postId, @RequestHeader("Authorization") String token) throws UserException, PostException{
		
		User reqUser=userService.getUserProfile(token);
		
		Post updatedPost=postService.unLikePost(postId, reqUser.getId());
		
		return new ResponseEntity<Post>(updatedPost,HttpStatus.OK);
				
	}
	
	@PutMapping("/{postId}")
	public ResponseEntity<ApiResponse> updatePostHandler(@RequestHeader Post post, @PathVariable Integer postId, @RequestHeader("Authorization") String jwt) throws UserException, PostException{
		User reqUser=userService.getUserProfile(jwt);
		
		String message=postService.updatePostById(postId, post, reqUser.getId());
		
		ApiResponse res=new ApiResponse(message,true);
		
		return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
		
	}
	
	@DeleteMapping("/{postId}")
	public ResponseEntity<ApiResponse> deletePostHandler(@PathVariable Integer postId, @RequestHeader("Authorization") String token) throws UserException, PostException{
		
		User reqUser=userService.getUserProfile(token);
		
		String message=postService.deletePostById(postId, reqUser.getId());
		
		ApiResponse res=new ApiResponse(message,true);
		
		return new ResponseEntity<ApiResponse> (res, HttpStatus.OK);
		
	}

}
