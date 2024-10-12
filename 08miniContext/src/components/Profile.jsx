import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
     const {user} = useContext(UserContext)

     if(!user) return <div>Please Login</div>
     return <div>Welcom {user.username} and password is {user.password}</div>
}

export default Profile
