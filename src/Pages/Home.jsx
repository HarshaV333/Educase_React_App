import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' h-[90vh] flex flex-col justify-end'>
        <h3 className=' font-medium py-2 text-2xl'>Welcome to PopX</h3>
        <div className=' mb-4'>
          <p className=' text-sm text-gray-400'>Lorem ipsum dolor sit amet,</p>
          <p className=' text-sm text-gray-400'>consectetur adipiscing elit,</p>
        </div>
        <Link to={'/createAccount'}>
          <button className=' py-2 text-sm bg-blue-600 text-white rounded-md w-full'>
                  Create Account
          </button>
        </Link>
        <Link to={'/login'}>
          <button className=' py-2 text-sm bg-purple-200 text-black font-medium rounded-md mt-2 mb-4 w-full'>
              Already Registered? Login
          </button>
        </Link>
    </div>
  )
}

export default Home