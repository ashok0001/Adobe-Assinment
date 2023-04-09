package com.adobe.controller.mapper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.adobe.dto.PostDto;
import com.adobe.dto.UserDto;
import com.adobe.modal.Post;
import com.adobe.modal.User;

@Service
public class PostMapper {
	
	
	public List<PostDto> toPostDtos(List<Post> posts){
		
		List<PostDto> postDtos = new ArrayList<>();
		for (Post post : posts) {
		    User user = post.getUser();
		    UserDto userDto = new UserDto(user.getId(), user.getName(), user.getEmail());
		    PostDto postDto = new PostDto(post.getId(), userDto, post.getContent(), post.getCreatedAt(), post.getUpdatedAt(), new ArrayList<>());
		    for (User likedUser : post.getLikedUser()) {
		        UserDto likedUserDto = new UserDto(likedUser.getId(), likedUser.getName(), likedUser.getEmail());
		        postDto.getLikedUser().add(likedUserDto);
		    }
		    postDtos.add(postDto);
		}
		return postDtos;
	}
	
	public PostDto toPostDto(Post post){
		
		    User user = post.getUser();
		    UserDto userDto = new UserDto(user.getId(), user.getName(), user.getEmail());
		    PostDto postDto = new PostDto(post.getId(), userDto, post.getContent(), post.getCreatedAt(), post.getUpdatedAt(), new ArrayList<>());
		    for (User likedUser : post.getLikedUser()) {
		        UserDto likedUserDto = new UserDto(likedUser.getId(), likedUser.getName(), likedUser.getEmail());
		        postDto.getLikedUser().add(likedUserDto);
		    }
		    
		
		return postDto;
	}

	
	
}
