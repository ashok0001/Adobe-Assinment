import React from 'react'
import UserCard from './UserCard'

const UserList = () => {
  return (
    <div className='space-y-5 px-10'>
        {[1,1,1,1,1,1].map(()=>
        <UserCard username={"username"}/>
        )}
    </div>
  )
}

export default UserList