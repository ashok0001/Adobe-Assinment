package com.adobe.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.adobe.modal.User;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Size;

public class PostDto {
	
	private Integer id;
	
	
    private UserDto user;
	
	private String content;
	
	
	private LocalDateTime createdAt;
	
	
	private LocalDateTime updatedAt;
	
	
	private List<UserDto> likedUser;

	public PostDto() {
		// TODO Auto-generated constructor stub
	}
	public PostDto(Integer id, UserDto user, String content, LocalDateTime createdAt, LocalDateTime updatedAt,
			List<UserDto> likedUser) {
		super();
		this.id = id;
		this.user = user;
		this.content = content;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.likedUser = likedUser;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public UserDto getUser() {
		return user;
	}


	public void setUser(UserDto user) {
		this.user = user;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public LocalDateTime getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}


	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}


	public List<UserDto> getLikedUser() {
		return likedUser;
	}


	public void setLikedUser(List<UserDto> likedUser) {
		this.likedUser = likedUser;
	}
	
	

}
