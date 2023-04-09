package com.adobe.util;

import java.util.List;

import com.adobe.modal.Post;

import java.util.Collections;
import java.util.Comparator;

public class PostUtil {

  public static void sortPostsByLikes(List<Post> posts) {
    Comparator<Post> comparator = new Comparator<Post>() {
      @Override
      public int compare(Post p1, Post p2) {
        int likes1 = p1.getLikedUser().size();
        int likes2 = p2.getLikedUser().size();
        return likes1 - likes2;
      }
    };
    Collections.sort(posts, comparator);
  }
  
}
