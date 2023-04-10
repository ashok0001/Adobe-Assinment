import React, { useEffect } from 'react'
import UserCard from './UserCard'
import "../../App.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findAllPostAction } from '../../Redux/Post/Action';

const UserList = () => {
  const jwt=localStorage.getItem("jwt");
  const dispatch=useDispatch();
  const {user,post}=useSelector(store=>store);
  const navigate=useNavigate();


useEffect(()=>{
  dispatch(findAllPostAction(jwt))
},[jwt,post.createdPost])
  
  return (
    <div className='px-10 components w-full'>
        {[1,1,1,1,1,1].map(()=>
        <UserCard username={"username"}/>
        )}
    </div>
  )
}

export default UserList