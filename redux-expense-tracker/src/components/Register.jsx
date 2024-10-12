import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { register } from '../features/auth/authSlice'

function Register() {

     const[username,setUsername]=useState("")
     const[email,setEmail]=useState("")
     const[password,setPassword]=useState("")

     const dispatch=useDispatch();

     const handleRegister=()=>{
          dispatch(register({username,email,register}))
     }
  return (
    <div className='max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-lg'>
     <h2 className="text-2xl font-semibold mb-4">Register</h2>
     <input type="text"
     placeholder='Username' 
     value={username}
     onChange={(e)=> setUsername(e.target.value)}
     className='block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md'
     />
     <input type="email"
     placeholder='Email' 
     value={email}
     onChange={(e)=> setEmail(e.target.value)}
     className='block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md'
     />
     <input type="password"
     placeholder='Password' 
     value={password}
     onChange={(e)=> setPassword(e.target.value)}
     className='block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md'
     />
      <button
      onClick={handleRegister}
      className='w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md'
      >
          Register
      </button>
    </div>
  )
}

export default Register
