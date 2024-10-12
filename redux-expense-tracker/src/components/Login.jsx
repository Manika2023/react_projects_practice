import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'

export default function Login() {
     const[username,setUsername]=useState("")
     const[password,setPassword]=useState("")

     const dispatch=useDispatch();

     const handleLogin=()=>{
          // Simplified login - in a real app you'd verify credentials via a server
         dispatch(login({ username,password }));
     }

  return (
    <div className='max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-lg'>
     <h2 className="text-2xl font-semibold mb-4">Login</h2>
     <input type="text"
     placeholder='Username'
     value={username}
     onChange={(e)=>setUsername(e.target.value)}
     className="block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
      />
     <input type="password"
     placeholder='Password'
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     className="block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
      />
      
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md"
      >
        Login
      </button>
      
    </div>
  )
}
