import React, { useEffect } from 'react'
import PostCard from './PostCard'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findAllPostAction } from '../../Redux/Post/Action';

const PostList = () => {
  const jwt=localStorage.getItem("jwt");
  const dispatch=useDispatch();
  const {user,post}=useSelector(store=>store);
  const navigate=useNavigate();

useEffect(()=>{
  dispatch(findAllPostAction(jwt))
},[jwt,post.createdPost,post.deletedPost, post.likedPost,post.unlikedPost])
  return (
    <div className='px-10 lg:px-32 space-y-10'>
        {!post.posts?.error && post?.posts?.map((item)=><PostCard post={item}/>)}
    </div>
  )
}

export default PostList