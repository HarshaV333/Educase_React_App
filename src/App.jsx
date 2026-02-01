import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CreateAccount from './Pages/CreateAccount'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

const App = () => {
  
  const [data, setData] = useState(null)

  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <div className='w-[300px] h-[90vh] border font-Rubic flex flex-col  '>
        
        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/createAccount' element={<CreateAccount/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>

      </div>
    </div>
  )
}

export default App
