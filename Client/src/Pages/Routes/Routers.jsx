import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserForm from '../../Components/UserForm/UserForm'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<UserForm/>}></Route>
        </Routes>
    </div>
  )
}

export default Routers