package com.adobe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.adobe.modal.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {
	
	@Query("SELECT p, u.id, u.email, u.name FROM Post p JOIN User u ON p.user = u.id WHERE p.id = :postId")
    Optional<Post> findPostByPostIdWithUser(@Param("postId") Integer postId);


}
