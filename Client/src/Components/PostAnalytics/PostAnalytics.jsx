import React from 'react'
import PostCard from '../PostList/PostCard'

const PostAnalytics = () => {
  return (
    <div className='px-10 lg:px-20'>
    <h1 className='font-semibold font-serif pb-5'>Total Post: 200</h1>

    <div>
        <h1 className='text-center py-5 text-xl font-semibold'>Top Liked Posts</h1>
        <div>
            {[1,1,1,1,1].map((item)=><PostCard username={item}/>)}
        </div>
        
    </div>
</div>
  )
}

export default PostAnalytics