import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-2'>
          <div className='flex justify-between items-center mt-4'>
            <h3 className='bg-red-600 px-3 py-1  ml-4 rounded'>High</h3>
            <h4 className='text-sm  mr-4'>20 feb 2024</h4>
          </div>
          <div className='ml-4 mr-2'>
          <h2 className='mt-5 text-2xl font-semibold '>Fix Navbar Bug</h2>
          <p className='text-sm mt-2'>
            Resolve alignment and responsiveness issues in the navigation bar across desktop and mobile screens.
          </p>
          </div>
          <div className='mt-4'>
            <button className='w-full bg-gray-800 rounded-sm'>Accepted</button>
          </div>

        </div>
  )
}

export default NewTask
