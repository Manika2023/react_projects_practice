import {createSlice} from '@reduxjs/toolkit'

const initialState={
     user:JSON.parse(localStorage.getItem('user')) || null,
     // !null becomes true
     // !!null becomes false
     // if it is returning null then isAuthenticated -false
     // - If there is no user data in localStorage, `!!null` evaluates to `false`, meaning the user is not authenticated.
     // - If user data exists in localStorage, `!!"some string"` evaluates to `true`, meaning the user is authenticated.
     isAuthenticated: !!localStorage.getItem('user')
}
export const authSlice=createSlice({
     // this name is used in store
     name:'auth',
     initialState,
     reducers:{
          login:(state,action)=>{
               state.user=action.payload;
               state.isAuthenticated=true;
               localStorage.setItem('user',JSON.stringify(action.payload)) // Persist(store) user data
          },
          logout:(state)=>{
               state.user=null;
               state.isAuthenticated=false;
               localStorage.removeItem('user') //remove from localStorage
          },

          register:(state,action)=>{
               const {username,email,password}=action.payload;
               // make [] if users is not store in localstorage
               const existingUsers=JSON.parse(localStorage.getItem('users')) || [];

               const isUserExists=existingUsers.find(user => user.email === email)

               if (!isUserExists){
                    const newUser={username,password,email}
                    existingUsers.push(newUser)
                    // set all users
                    localStorage.setItem('users',JSON.stringify(existingUsers))
                    state.user=newUser;
                    state.isAuthenticated=true;
                    // store single user
                    localStorage.setItem('user',JSON.stringify(newUser))
               }
               else{
                    alert("user already exists!")
                    return "user already exists!"
               }
          }
     },
});

export const {login,logout,register}=authSlice.actions;
export default authSlice.reducer;