package com.adobe.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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

@RestController
public class PostControllers {

	private UserService userService;
	private PostService postService;
	private PostRepository postRepository;
	
	public PostControllers(PostRepository postRepository,UserService userService,PostService postService) {
		
		this.postRepository=postRepository;
		this.userService=userService;
		this.postService=postService;
		
	}
	
	
	
	@PostMapping("/posts")
	public ResponseEntity<Post> createPostHandler(@RequestBody PostRequest postReuest,@RequestHeader("Authorization") String token) throws UserException{
		
	
		
		User user= userService.getUserProfile(token);
		
		
		
		postReuest.setUserId(user.getId());
		
		
		
		Post createdPost = postService.createPost(postReuest);
		
		return new ResponseEntity<Post>(createdPost, HttpStatus.CREATED);
	}
	
	@GetMapping("/posts/{postId}")
	public ResponseEntity<Post> findPostByIdHandler(@PathVariable Integer postId) throws UserException, PostException{

		
		Post createdPost=postService.findPostById(postId);
		
		
		
		return new ResponseEntity<Post>(createdPost,HttpStatus.ACCEPTED);
		
	}
	
	@PutMapping("/posts/{postId}/like")
	public ResponseEntity<Post> likePostHandler(@PathVariable("postId") Integer postId, @RequestHeader("Authorization") String token) throws UserException, PostException{
		
		User user=userService.getUserProfile(token);
		
		Post updatedPost=postService.likePost(postId, user.getId());
		
		return new ResponseEntity<Post>(updatedPost,HttpStatus.OK);
		
	}
	
	
	@PutMapping("/posts/{postId}/unlike")
	public ResponseEntity<Post> unLikePostHandler(@PathVariable("postId") Integer postId, @RequestHeader("Authorization") String token) throws UserException, PostException{
		
		User reqUser=userService.getUserProfile(token);
		
		Post updatedPost=postService.unLikePost(postId, reqUser.getId());
		
		return new ResponseEntity<Post>(updatedPost,HttpStatus.OK);
				
	}
	
	@PutMapping("/posts/{postId}")
	public ResponseEntity<ApiResponse> updatePostHandler(@RequestBody Post post, @PathVariable Integer postId, @RequestHeader("Authorization") String jwt) throws UserException, PostException{
		User reqUser=userService.getUserProfile(jwt);
		
		String message=postService.updatePostById(postId, post, reqUser.getId());
		
		ApiResponse res=new ApiResponse(message,true);
		
		return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
		
	}
	
	@DeleteMapping("/posts/{postId}")
	public ResponseEntity<ApiResponse> deletePostHandler(@PathVariable Integer postId, @RequestHeader("Authorization") String token) throws UserException, PostException{
		
		User reqUser=userService.getUserProfile(token);
		
		String message=postService.deletePostById(postId, reqUser.getId());
		
		ApiResponse res=new ApiResponse(message,true);
		
		return new ResponseEntity<ApiResponse> (res, HttpStatus.OK);
		
	}
	
	@GetMapping("/analytics/posts")
	public ResponseEntity<Integer> totalNumberOfPostHandler() throws UserException{
		
		Integer totalPost= postService.totalNumberOfPost();
		
	
		
		return new ResponseEntity<>(totalPost,HttpStatus.OK);
		
	}
	
	@GetMapping("/analytics/posts/top-liked")
	public ResponseEntity<List<Post>> topLikedPostHandler() throws UserException{
		
		List<Post> posts= postService.topLikedPost();
		
	
		
		return new ResponseEntity<>(posts,HttpStatus.OK);
		
	}

}
