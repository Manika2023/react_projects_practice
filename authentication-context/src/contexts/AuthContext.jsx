import { Children, createContext,useContext,useState } from "react";

// default values for AuthContext
export const AuthContext= createContext({
     user:null,
     register:(email,password)=>{},
     login:(email,password)=>{},
     logout:()=>{},
})

// custom hook to use the AuthContext
export const useAuth=()=>{
     return useContext(AuthContext)
}

// provider component to wrap around the app
export const AuthProvider=({children})=>{
     const [user,setUser]=useState(null)

     // register a new user (in a real app , you would senda request to backend)
    const register=(email,password)=>{
     setUser({email,password})
     console.log(`regiser user with email:${email}`);
     
       };
     const login=(email,password)=>{
          setUser({email})
          console.log(`regiser user with email:${email}`); 

    };
//     logout the user
const logout=()=>{
     setUser(null)
     console.log(`user logged out`);
     
};

// value passed to AuthContext Consumers
const authValue={
     user,
     register,
     login,
     logout,
};

return (
     <AuthContext.Provider value={authValue}>
          {children}
     </AuthContext.Provider>
);
};