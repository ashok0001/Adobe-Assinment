import React, { useEffect } from 'react'
import UserCard from '../UserList/UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { GetTopActiveUsersAction, totalUser } from '../../Redux/User/Action';

const UserAnalytics = () => {

  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {user}=useSelector(store=>store);
console.log("top",user.activeUsers)

  useEffect(()=>{
    dispatch(GetTopActiveUsersAction(jwt))
    dispatch(totalUser(jwt))
  },[jwt])

  return (
    <div className='px-10 lg:px-20'>
        <h1 className='font-semibold font-serif pb-5'>Total User : {user.totalUser?.total_users}</h1>


<div >
    <h1 className='text-center py-5 text-xl font-semibold'>Top Active Users</h1>
    <div>
            {user.activeUsers?.map((item)=><UserCard user={item}/>)}
        </div>
</div>
        
    </div>
  )
}

export default UserAnalytics