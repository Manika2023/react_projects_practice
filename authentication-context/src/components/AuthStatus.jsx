import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function AuthStatus() {
     const {user}=useAuth()

  return (
         <div>
            {user ? <p>Logged in as: {user.email}</p> : <p>Not logged in</p>}
        </div>
  )
}

export default AuthStatus
