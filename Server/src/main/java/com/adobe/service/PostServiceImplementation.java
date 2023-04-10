package com.adobe.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.adobe.exception.PostException;
import com.adobe.exception.UserException;
import com.adobe.modal.Post;
import com.adobe.modal.User;
import com.adobe.repository.PostRepository;
import com.adobe.repository.UserRepository;
import com.adobe.request.PostRequest;
import com.adobe.util.PostUtil;




@Service
public class PostServiceImplementation implements PostService {
	
	
	private PostRepository postRepository;
	
	private UserService userService;
	
	private UserRepository userRepository;
	
	public PostServiceImplementation(PostRepository postRepository,UserService userService,UserRepository userRepository) {
		
		this.postRepository=postRepository;
		this.userService=userService;
		this.userRepository=userRepository;
		
	}

	@Override
	public Post createPost(PostRequest postReuest) throws UserException {
		
		String content=postReuest.getContent();
		Integer userId=postReuest.getUserId();
		
		
		
		User user = userService.findUserById(userId);
		
		Post createdPost= new Post();
		createdPost.setContent(content);
		createdPost.setUser(user);
		createdPost.setCreatedAt(LocalDateTime.now());
		createdPost.setUpdatedAt(LocalDateTime.now());
		System.out.println( postRepository.save(createdPost).getContent());
		
		user.getPosts().add(createdPost);
		userRepository.save(user);
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
		
//		if(oldPost.getUser().getId().equals(userId)) {
//			System.out.println("inside delete");
//			
//		
//			
//		
//		}
		postRepository.save(oldPost);
		oldPost.setUpdatedAt(LocalDateTime.now());
		return "Post Updated Successfully";
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
		
		Set<User> likedUsers = post.getLikedUser();
		
		if(!likedUsers.contains(user)) {
			likedUsers.add(user);
		}
		
		return postRepository.save(post);
		
	}

	@Override
	public Post unLikePost(Integer postId, Integer userId) throws UserException, PostException {
		
		User user= userService.findUserById(userId);
		
		Post post = findPostById(postId);
		
		post.getLikedUser().remove(user);
	
	
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

	@Override
	public List<Post> findAllPost() {
		return postRepository.findAll();
		
	}

}
