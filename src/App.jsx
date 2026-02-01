import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <div className=' w-[300px] h-[90vh] border font-Rubic flex flex-col justify-end p-5'>
        
        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>

      </div>
    </div>
  )
}

export default App
