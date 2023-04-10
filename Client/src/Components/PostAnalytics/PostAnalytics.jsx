import React, { useEffect } from 'react'
import PostCard from '../PostList/PostCard'
import { useDispatch, useSelector } from 'react-redux';
import { TopLikedPostAction, totalPost } from '../../Redux/Post/Action';

const PostAnalytics = () => {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {user,post}=useSelector(store=>store);
console.log("top Liked",post.topLikedPosts,post)


useEffect(()=>{
  dispatch(TopLikedPostAction(jwt))
  dispatch(totalPost(jwt))

},[jwt])

  return (
    <div className='px-10 lg:px-20'>
    <h1 className='font-semibold font-serif pb-5'>Total Post : {post.totalPost}</h1>

    <div>
        <h1 className='text-center py-5 text-xl font-semibold'>Top Liked Posts</h1>
        <div>
            {post.topLikedPosts?.map((item)=><PostCard post={item}/>)}
        </div>
        
    </div>
</div>
  )
}

export default PostAnalytics