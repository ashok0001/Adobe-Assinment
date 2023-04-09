package com.adobe.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.adobe.exception.PostException;
import com.adobe.exception.UserException;
import com.adobe.modal.Post;
import com.adobe.modal.User;
import com.adobe.repository.PostRepository;
import com.adobe.request.PostRequest;
import com.adobe.util.PostUtil;




@Service
public class PostServiceImplementation implements PostService {
	
	
	private PostRepository postRepository;
	
	private UserService userService;
	
	public PostServiceImplementation(PostRepository postRepository,UserService userService) {
		
		this.postRepository=postRepository;
		this.userService=userService;
		
	}

	@Override
	public Post createPost(PostRequest postReuest) throws UserException {
		
		String content=postReuest.getContent();
		Integer userId=postReuest.getUserId();
		
		User user = userService.findUserById(userId);
		
		User postsUser=new User();
		
		postsUser.setEmail(user.getEmail());
		postsUser.setId(user.getId());
		postsUser.setName(user.getName());
		
		Post createdPost= new Post();
		createdPost.setContent(content);
		createdPost.setUser(postsUser);
		createdPost.setCreatedAt(LocalDateTime.now());
		createdPost.setUpdatedAt(LocalDateTime.now());
		
		
		return postRepository.save(createdPost);
		
	}

	@Override
	public Post findPostById(Integer postId) throws PostException {
		
		Optional<Post> opt = postRepository.findById(postId);
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new PostException("Post not exist with id: " + postId);
		
	}

	@Override
	public String updatePostById(Integer postId, Post post,Integer userId) throws PostException {
		Post oldPost =findPostById(postId);
		
		oldPost.setContent(post.getContent());
		
		if(oldPost.getUser().getId().equals(userId)) {
			System.out.println("inside delete");
			postRepository.save(oldPost);
		
			return "Post Updated Successfully";
		
		}
		
		return "You can't update another users post";
	}

	@Override
	public String deletePostById(Integer postId,Integer userId) throws PostException, UserException {
		
		Post post =findPostById(postId);
		
		User user=userService.findUserById(userId);
		
		System.out.println(post.getUser().getId()+" ------ "+user.getId());
		
		if(post.getUser().getId().equals(user.getId())) {
			System.out.println("inside delete");
			postRepository.deleteById(postId);
		
		return "Post Deleted Successfully";
		
		}
		
		
		throw new PostException("You Can't delete Another Users post");
		
	}

	@Override
	public Post likePost(Integer postId, Integer userId) throws UserException, PostException {
		
		User user= userService.findUserById(userId);
		
		Post post = findPostById(postId);
		
		User postsUser=new User();
		
		postsUser.setEmail(user.getEmail());
		postsUser.setId(user.getId());
		postsUser.setName(user.getName());
		
		
		post.getLikedUser().add(postsUser);
	
	
		return postRepository.save(post);
		
	}

	@Override
	public Post unLikePost(Integer postId, Integer userId) throws UserException, PostException {
		
		User user= userService.findUserById(userId);
		
		Post post = findPostById(postId);
		
		User postsUser=new User();
		
		postsUser.setEmail(user.getEmail());
		postsUser.setId(user.getId());
		postsUser.setName(user.getName());
		
		
		post.getLikedUser().remove(postsUser);
	
	
		return postRepository.save(post);
		
	}

	@Override
	public Integer totalNumberOfPost() {
		
		List<Post> posts=postRepository.findAll();
		
		
		return posts.size();
	}

	@Override
	public List<Post> topLikedPost() {
		// TODO Auto-generated method stub
		
		List<Post> posts=postRepository.findAll();
		
		if(posts.size()==0) {
			return posts;
		}
		
		PostUtil.sortPostsByLikes(posts);
		int numPosts = Math.min(posts.size(), 5); 
		List<Post> topPosts = posts.subList(0, numPosts);
		
		return topPosts;
	}

}
