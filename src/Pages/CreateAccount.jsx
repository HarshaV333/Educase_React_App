import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CreateAccount = () => {

    const [formData, setFormData] = useState({
        fullName: "", phNo: "", email: "", password: "", companyName: "", isAgency: ""
    })

    function changeHandler(e){
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "phNo" ? Number(value) : value
        }))
    }

    function submitHandler(e){
        e.preventDefault();
        console.log("formData", formData);
        setFormData({
            fullName: "", phNo: "", email: "", password: "", companyName: "", isAgency: ""
        })
    }

    return (
        <div className=' h-full flex flex-col p-5' >
            <h2 className='font-medium text-xl'>
                Create your
            </h2>
            <h2 className='font-medium text-xl'>
                PopX account
            </h2>
            <div className=' h-full flex flex-col justify-between'>
                <div className=' flex flex-col gap-4 mt-5'>
                    <div className='relative'>   
                        <label
                            className="absolute -top-2 left-2 px-1 bg-white text-[12px] text-purple-500"
                        >Full name <sup className=' text-red-600'>*</sup> </label>
                        <input
                            name='fullName'
                            type='text'
                            className=" border w-full rounded-md p-1"
                            value={formData.fullName}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='relative'>
                        <label
                            className="absolute -top-2 left-2 px-1 bg-white text-[12px] text-purple-500"
                        >Phone number <sup className=' text-red-600'>*</sup> </label>
                        <input
                            name='phNo'
                            type='number'
                            className=" border w-full rounded-md p-1"
                            value={formData.phNo}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='relative'>
                        <label
                            className="absolute -top-2 left-2 px-1 bg-white text-[12px] text-purple-500"
                        >Email address <sup className=' text-red-600'>*</sup> </label>
                        <input
                            name='email'
                            type='email'
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
                    <div className='relative'>
                        <label
                            className="absolute -top-2 left-2 px-1 bg-white text-[12px] text-purple-500"
                        >Company name <sup className=' text-red-600'>*</sup> </label>
                        <input
                            name='companyName'
                            type='text'
                            className=" border w-full rounded-md p-1"
                            value={formData.companyName}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className='relative'>
                        <label className=' text-sm'>
                            Are you an Agency? <sup className=' text-red-600'>*</sup>
                        </label>
                        <div className=' flex gap-2 items-center mt-1'>
                            <input
                                type='radio'
                                name='isAgency'
                                value='Yes'
                                onChange={changeHandler}
                                className=' size-4 checked:accent-purple-300'                                                                                        
                            />
                            <label className=' px-1 text-xs'>Yes</label>
                            <input
                                type='radio'
                                name='isAgency'
                                value='No'
                                onChange={changeHandler}
                                className=' size-4 accent-purple-300'                                                            
                            />
                            <label className=' px-1 text-xs'>No</label>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={submitHandler} className='py-2 text-sm bg-violet-600 text-white rounded-md w-full'>
                        <Link to={'/dashboard'}>
                            Create Account
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount