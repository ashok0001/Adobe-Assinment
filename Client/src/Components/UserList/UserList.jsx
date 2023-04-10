import React from 'react'
import UserCard from './UserCard'
import "../../App.css"

const UserList = () => {
  return (
    <div className='px-10 components w-full'>
        {[1,1,1,1,1,1].map(()=>
        <UserCard username={"username"}/>
        )}
    </div>
  )
}

export default UserList