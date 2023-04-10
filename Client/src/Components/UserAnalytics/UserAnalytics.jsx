import React from 'react'
import UserCard from '../UserList/UserCard'

const UserAnalytics = () => {
  return (
    <div className='px-10 lg:px-20'>
        <h1 className='font-semibold font-serif pb-5'>Total User: 50</h1>


<div >
    <h1 className='text-center py-5 text-xl font-semibold'>Top Active Users</h1>
    <div>
            {[1,1,1,1,1].map((item)=><UserCard username={"sita raam"}/>)}
        </div>
</div>
        
    </div>
  )
}

export default UserAnalytics