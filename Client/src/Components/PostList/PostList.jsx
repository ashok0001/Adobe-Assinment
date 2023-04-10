import React from 'react'
import PostCard from './PostCard'

const PostList = () => {
  return (
    <div className='px-10 lg:px-32 space-y-10'>
        {[1,1,1,1,1,1].map((item)=><PostCard/>)}
    </div>
  )
}

export default PostList