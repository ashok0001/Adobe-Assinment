package com.adobe.service;

import java.util.List;

import com.adobe.exception.PostException;
import com.adobe.exception.UserException;
import com.adobe.modal.Post;
import com.adobe.request.PostRequest;


public interface PostService {
	
	public Post createPost(PostRequest postRequest) throws UserException;
	
	public Post findPostById(Integer postId) throws PostException;
	
	public String updatePostById(Integer postId,Post post, Integer userId) throws PostException;
	
	public String deletePostById(Integer postId,Integer userId) throws PostException, UserException;
	
	public Post likePost(Integer postId ,Integer userId) throws UserException, PostException;
	
	public Post unLikePost(Integer postId ,Integer userId) throws UserException, PostException;
	
	public Integer totalNumberOfPost();
	
	public List<Post> topLikedPost();

}
