import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import UserForm from '../../Components/UserForm/UserForm'
import HomePage from '../HomePage/HomePage';
import Sidebar from '../../Components/Sidebar/Sidebar';
import UserList from '../../Components/UserList/UserList';
import UpdateUserForm from '../../Components/UserForm/UpdateUserForm';
import PostList from '../../Components/PostList/PostList';
import PostForm from '../../Components/PostForm/PostForm';
import PostAnalytics from '../../Components/PostAnalytics/PostAnalytics';
import UserAnalytics from '../../Components/UserAnalytics/UserAnalytics';
import { useDispatch } from 'react-redux';
import { getUsersProfileAction } from '../../Redux/User/Action';
import ViewUser from '../../Components/ViewUser/ViewUser';

const Routers = () => {
  const location =useLocation();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");

  useEffect(()=>{
dispatch(getUsersProfileAction(jwt));
  },[jwt])
  return (
   
    <div>
    

{(location.pathname !== "/login" && location.pathname !=="/signup")&& (
  <div className="flex ">
    <div className="sidebarBox border border-l-slate-500 ">
      <Sidebar />
    </div>

    <div className=" w-[70%] py-10 ">
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/update-user/:userId" element={<UpdateUserForm/>}></Route>
        <Route path="/users/:userId" element={<ViewUser/>}></Route>
        <Route path="/update-post/:postId" element={<PostForm/>}></Route>
        <Route path="/create-post" element={<PostForm/>}></Route>
        <Route path="/analytics/post" element={<PostAnalytics/>}></Route>
        <Route path="/analytics/user" element={<UserAnalytics/>}></Route>
        
      </Routes>
    </div>
  </div>
)}
{(location.pathname === "/login" || location.pathname==="/signup") && (
  <Routes>
    
    <Route path="/signup" element={<UserForm />} />
  </Routes>
)}
  </div>
  )
}

export default Routers