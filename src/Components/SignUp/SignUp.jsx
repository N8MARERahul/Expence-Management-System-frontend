import React from 'react'

export default function SignUp() {
  return (
    <div className='relative flex h-screen'>
      <div className="flex p-4 w-full">
        <div className="w-1/2 hidden sm:block">
          <img 
            src="./src/assets/images/background.png" 
            alt="bg"
            className='object-cover h-full rounded-[1.25rem]' 
          />
        </div>
        <div className="flex flex-col p-8 gap-y-8 justify-center flex-1 ">
          <h1 className="text-5xl font-semibold ">Sign Up</h1>
          <form className="flex flex-col gap-y-5">
            
            <div className="flex gap-x-4">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Username"
                required
              />
            </div>

            <div className='relative w-full'>
                <input 
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white pr-10"
                  type="email" 
                  placeholder='Email Address'
                  required
                />
            </div>

            <div className='relative w-full'>
                <input 
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white pr-10"
                  type="text" 
                  placeholder='Full Name'
                  required
                />
            </div>

            <div className='relative w-full'>
                <input 
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white pr-10"
                  type="password"  
                  placeholder='Password'
                  required
                />
            </div>
            <div className='relative w-full'>
                <input 
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white pr-10"
                  type="password"  
                  placeholder='Confirm Password'
                  required
                />
            </div>

            <div className="flex justify-center">
                <button
                  type="button"
                  className="font-semibold bg-[#03A8FD] text-white py-2 rounded-full hover:bg-[#0f84c1] transition-all duration-300 ease-in-out flex items-center justify-center w-1/2 focus:shadow-outline focus:outline-none"
                >
                  Sign Up
                </button>
              </div>
          </form>

          <img 
            src="./src/assets/images/decoration.png"
            alt="decoration"
            className='absolute object-cover top-0 right-0 -z-30' 
          />
        </div>
      </div>
    </div>
  )
}
