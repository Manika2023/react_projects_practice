import React,{useState} from "react";
import { useAuth } from "../contexts/AuthContext";

const LoginForm=()=>{
     const {login}=useAuth()
     const [email,setEmail]=useState("")
     const [password,setPassowrd]=useState("")

     const handleLogin=(e)=>{
          e.preventDefault()
          login(email,password)
     };
     return(
          <form onSubmit={handleLogin}>
               <input type="email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               placeholder="Enter email"
               required
                />
                <br></br>
               <input type="password"
               value={password}
               onChange={(e)=>setPassowrd(e.target.value)}
               placeholder="Enter password"
               required
                />
                <button type="submit">Login</button>
          </form>
     );

};
export default LoginForm;