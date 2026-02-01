import React from 'react'

const Dashboard = () => {
  return (
    <div className=' h-full'>
        <div className=" h-full flex flex-col justify-between">
            <div className=' h-full'>
                {/* Header */}
                <div className="border-b border-gray-200 px-4 py-3 w-full">
                    <h3 className="text-sm font-medium">Account Settings</h3>
                </div>

                {/* Profile Section */}
                <div className="flex mt-1 px-4 py-4">
                    <div className="relative mr-3">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Profile"
                        className="h-16 w-16 rounded-full object-cover"
                    />
                    <span className="absolute -bottom-0.5 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[10px] text-white">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><path fill="#ffffff" d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0-10.4-31.2C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                    </span>
                    </div>

                    <div>
                    <h4 className="text-sm font-semibold">Marry Doe</h4>
                    <p className="text-xs text-gray-500">Marry@Gmail.Com</p>
                    </div>
                </div>

                {/* Description */}
                <div className="px-4 pb-4 text-xs text-gray-600 ">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                    Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                    Erat, Sed Diam
                </div>

                {/* Dashed Sections */}
                <div className='border border-dashed'></div>
            </div>
            <div className=' pb-7'>
                <div className='border border-dashed'></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard