import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-2'>
          <div className='flex justify-between items-center mt-4'>
            <h3 className='bg-red-600 px-3 py-1  ml-4 rounded'>High</h3>
            <h4 className='text-sm  mr-4'>20 feb 2024</h4>
          </div>
          <div className='ml-4 mr-2'>
          <h2 className='mt-5 text-2xl font-semibold '>API Integration</h2>
          <p className='text-sm mt-2'>
            Connect frontend components to the backend API endpoints and ensure data is fetched and displayed correctly.
          </p>
          </div>
          <div className='mt-2'>
            <button className='w-full' >Completed</button>
          </div>

        </div>
  )
}

export default FailedTask
