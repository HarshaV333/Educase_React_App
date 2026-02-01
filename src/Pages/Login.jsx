import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    function changeHandler(e){
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function submitHandler(e){
        e.preventDefault();
        console.log("formData", formData);
    }

  return (
    <div className='flex flex-col'>
        <div>
            <h2 className='font-medium text-xl'>Signin to your</h2>
            <h2 className='font-medium text-xl'>PopX account</h2>
        </div>
        <div className=' my-1'>
            <p className=' text-sm text-gray-400'>Lorem ipsum dolor sit amet,</p>
            <p className=' text-sm text-gray-400'>consectetur adipiscing elit,</p>
        </div>
        <div className='flex flex-col gap-4 mt-6'>
            <div className='relative'>
                <label
                    className="absolute -top-2 left-2 px-1 bg-white text-[12px] text-purple-500"
                >Email address <sup className=' text-red-600'>*</sup> </label>
                <input
                    name='email'
                    type='text'
                    className=" border w-full rounded-md p-1"
                    value={formData.email}
                    onChange={changeHandler}
                />
            </div>
            <div className='relative'>
                <label
                    className="absolute -top-2 left-2 px-1 bg-white text-[12px] text-purple-500"
                >Password <sup className=' text-red-600'>*</sup> </label>
                <input
                    name='password'
                    type='password'
                    className=" border w-full rounded-md p-1"
                    value={formData.password}
                    onChange={changeHandler}
                />
            </div>
        </div>
        <div>
            <button onClick={submitHandler} className='py-2 text-sm bg-gray-300 font-medium text-white rounded-md w-full mt-4'>
                Login
            </button>
        </div>
    </div>
  )
}

export default Login