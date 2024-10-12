import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className="bg-red-500 text-center p-4 text-white font-bold">Learn about redux toolkit</h2>
    <div className="flex">
      <div className="add w-1/3 m-4">
             <AddTodo/>
      </div>
      <div className="todos w-[60%]">
          <Todos/>
      </div>
    </div>
    </>
  )
}

export default App
