import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const UserCard = ({username}) => {
    const navigate=useNavigate();
    const handleNavigate=(path)=>{
        navigate(path)
    }
    const handleDelete=()=>{
        console.log("delete");
    }
  return (
    <div>
         <div className='p-2 border shadow-md'>
         <div className=" items-center ">
            <div className="">
              <p>{username}</p>
              <p className="opacity-70">{username}</p>
            </div>
            <div className='flex items-center space-x-5 text-lg mt-5'>
                <BsFillPencilFill  className='cursor-pointer' onClick={()=>handleNavigate("/update-user/userId")}/>

                <MdDelete onClick={handleDelete}/>

                <AiOutlineUser onClick={()=>handleNavigate("/users/id")}/>
            </div>
          </div>
    </div>
  
    </div>
  )
}

export default UserCard