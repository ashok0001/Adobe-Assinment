package com.adobe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adobe.modal.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {

}
