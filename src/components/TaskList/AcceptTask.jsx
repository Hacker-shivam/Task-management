import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data.title)
  return (
   <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-1'>
          <div className='flex justify-between items-center mt-4'>
            <h3 className='bg-red-600 px-3 py-1  ml-4 rounded'>{data.category}</h3>
            <h4 className='text-sm  mr-4'>{data.date}</h4>
          </div>
          <div className='ml-4 mr-2'>
          <h2 className='mt-5 text-2xl font-semibold '>{data.title}</h2>
          <p className='text-sm mt-2'>
           {data.description}
          </p>
          </div>
          <div className='flex justify-between mt-10 ml-4 mr-4 font-light'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
          </div>

    </div>

  )
}

export default AcceptTask
