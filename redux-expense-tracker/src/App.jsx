import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Login from './components/Login'
import Register from './components/Register'
import ExpenseTracker from './components/ExpenseTracker'

function App() {
  const {isAuthenticated}= useSelector(state=> state.auth)
  const[isRegistering,setIsRegistering]=useState(false)

  return (
    <div>
      {!isAuthenticated ? (
        isRegistering ? (
          <>
          <Register/>

          <p className='mt-4 text-center'>Already have an account? {" "}
          <button
          onClick={()=> setIsRegistering(false)}
          className="text-blue-500 hover:underline"
          >
            Login here
          </button>
            </p>
          </>
        ):(
          <>
           <Login />
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <button
                onClick={() => setIsRegistering(true)}
                className="text-blue-500 hover:underline"
              >
                Register here
              </button>
            </p>
          </>
        )
      ):(
        <ExpenseTracker/>
      )}
    </div>
  )
}

export default App

