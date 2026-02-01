import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CreateAccount from './Pages/CreateAccount'

const App = () => {
  // w-[300px] h-[90vh] border font-Rubic flex flex-col justify-end p-5
  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <div className='w-[300px] h-[90vh] border font-Rubic flex flex-col p-5 '>
        
        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/createAccount' element={<CreateAccount/>} />
        </Routes>

      </div>
    </div>
  )
}

export default App
