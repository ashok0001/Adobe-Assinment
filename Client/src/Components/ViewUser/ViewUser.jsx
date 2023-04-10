import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findUserByIdAction } from '../../Redux/User/Action';
import UserCard from '../UserList/UserCard';

const ViewUser = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((store) => store);
   
    const jwt = localStorage.getItem("jwt");
    const { userId } = useParams();

    useEffect(() => {
        const data = { userId: +userId, jwt };
        if (userId != null || userId !== undefined) {
          dispatch(findUserByIdAction(data));
        }
      }, [userId]);

  return (
    <div className='px-10'>
        <UserCard user={user.findById}/>
    </div>
  )
}

export default ViewUser