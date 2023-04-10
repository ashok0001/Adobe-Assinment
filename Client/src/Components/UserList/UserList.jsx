import React, { useEffect } from 'react'
import UserCard from './UserCard'
import "../../App.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findAllPostAction } from '../../Redux/Post/Action';
import { findAllUserAction } from '../../Redux/User/Action';

const UserList = () => {
  const jwt=localStorage.getItem("jwt");
  const dispatch=useDispatch();
  const {user,post}=useSelector(store=>store);
  const navigate=useNavigate();


useEffect(()=>{
  dispatch(findAllUserAction(jwt))
},[jwt,post.createdPost,user.deletedUser])
  
  return (
    <div className='px-10 components w-full'>
        {user.users?.map((item)=>
        <UserCard user={item}/>
        )}
    </div>
  )
}

export default UserList