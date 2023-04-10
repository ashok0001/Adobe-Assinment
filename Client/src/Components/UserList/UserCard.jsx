import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { deleteUsersAction } from '../../Redux/User/Action'
import { useDispatch, useSelector } from 'react-redux'

const UserCard = ({user}) => {

    const navigate=useNavigate();
    const jwt=localStorage.getItem("jwt");
  const dispatch=useDispatch();
  const storeUser=useSelector(store=>store.user);

    const handleNavigate=(path)=>{
        navigate(path)
    }
    const handleDelete=()=>{
      const data={jwt,userId:user.id}
        dispatch(deleteUsersAction(data))
    }
  return (
    <div>
         <div className='px-10 py-5 border shadow-md mb-10 components'>
         <div className=" items-center ">
            <div className="">
              <p className='font-semibold text-lg'>{user?.name}</p>
              <p className="opacity-70">{user?.email}</p>
              

              <p className='py-2'>{user?.bio}</p>
            </div>
            <div className='flex items-center space-x-5 text-lg mt-5'>
                <BsFillPencilFill  className='cursor-pointer' onClick={()=>handleNavigate(`/update-user/${user.id}`)}/>

                <MdDelete className='cursor-pointer' onClick={handleDelete}/>

                <AiOutlineUser className='cursor-pointer' onClick={()=>handleNavigate(`/users/${user.id}`)}/>
            </div>
          </div>
    </div>
  
    </div>
  )
}

export default UserCard