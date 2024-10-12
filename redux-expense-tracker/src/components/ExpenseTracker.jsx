import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTransaction,deleteTransaction,editTransaction } from '../features/expenses/expensesSlice'
import { nanoid } from '@reduxjs/toolkit'
import {logout} from '../features/auth/authSlice'

function ExpenseTracker() {
     const dispatch=useDispatch()
     const {transactions,totalBalance}=useSelector(state => state.expenses)

     const [description,setDescription]=useState('')
     const[amount,setAmount]=useState(0)
     const [isEditing,setISEditing]=useState(false)
     const[currentTransactionId,setCurrentTransactionId]=useState(null)
     const[message,setMessage]=useState("")

     // handle add or edit transaction

     const handleTransaction=()=>{
          if(isEditing){
               dispatch(editTransaction({
                    id:currentTransactionId,
                    description,
                    amount:parseFloat(amount)
               }))
               setISEditing(false) //reset editing mode
          }
          // add the transaction
          else if(description !="" && amount !=""){
            dispatch(addTransaction({
              // id:Date.now(),
              id:nanoid(),
              description,
              amount:parseFloat(amount),
         }));
          }
          else{
            setMessage("Description and Amount both fields are required ")
          }
          setDescription('')
          setAmount(0)
     }

     // handle Edit Button click
     const handleEdit=(transaction)=>{
          setISEditing(true)
          setCurrentTransactionId(transaction.id)
          setDescription(transaction.description)
          setAmount(transaction.amount)
     };

    //  to handle logout
     const handleLogout=()=>{
      dispatch(logout())
     }
  return (
    <div className='max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg'>
      <div className="top flex justify-between items-center">
     <h2 className="text-4xl font-semibold mb-4">Expenses Tracker</h2>
     <button onClick={handleLogout}
      className='text-2xl font-sm text-gray-100 p-2 rounded-md bg-red-500'
     >Logout</button>
      </div>
     {message && (
       <h2 className="text-1xl font-sm text-red-500 mb-4">{message}</h2>
     )}
     <p className="">Total Balance:${totalBalance}</p>
     <div className="mb-4">
     <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleTransaction}
          className={`w-full ${isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'} text-white px-3 py-2 rounded-md`}
        >
          {isEditing ? 'Update Transaction' : 'Add Transaction'}
        </button>
     </div>
      
     <ol className="list-decimal list-inside pl-5 space-y-4">
  {transactions.map(tx => (
    <li
      key={tx.id}
      className="flex justify-between items-center p-4 bg-white shadow rounded-md border border-gray-300 transition-transform transform hover:scale-105"
    >
      <span className="text-gray-800 font-semibold">
        {tx.description}: ${tx.amount}
      </span>
      <div>
        <button
          onClick={() => handleEdit(tx)}
          className="ml-4 px-3 py-1 rounded-md text-white bg-yellow-500 hover:bg-yellow-600 transition duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTransaction({ id: tx.id }))}
          className="ml-4 bg-red-500 px-2 py-1 rounded-md text-white hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ol>

    </div>
  )
}

export default ExpenseTracker
