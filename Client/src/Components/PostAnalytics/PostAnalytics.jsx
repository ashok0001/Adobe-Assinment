import React, { useEffect } from 'react'
import PostCard from '../PostList/PostCard'
import { useDispatch, useSelector } from 'react-redux';
import { TopLikedPostAction } from '../../Redux/Post/Action';

const PostAnalytics = () => {
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {user,post}=useSelector(store=>store);
console.log("top Liked",post.topLikedPosts)


useEffect(()=>{
  dispatch(TopLikedPostAction(jwt))

},[jwt])

  return (
    <div className='px-10 lg:px-20'>
    <h1 className='font-semibold font-serif pb-5'>Total Post: 200</h1>

    <div>
        <h1 className='text-center py-5 text-xl font-semibold'>Top Liked Posts</h1>
        <div>
            {post.topLikedPost?.map((item)=><PostCard user={item}/>)}
        </div>
        
    </div>
</div>
  )
}

export default PostAnalytics