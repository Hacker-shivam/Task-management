import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setuserData] = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-60 '>
        <div className='bg-red-400  mb-2 py-2 px-4 flex justify-between rounded '>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active</h5>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
            {userData.map(function(e, idx){
            return  <div key={idx} className='bg-emerald-500  mb-2 py-2 px-4 flex justify-between rounded '>
                <h2 className='w-1/5 text-white-600 text-l'>{e.name}</h2>
                <h3 className='w-1/5 text-l'>{e.taskNumbers.newTask}</h3>
                <h5 className='w-1/5 text-l text-yellow-300'>{e.taskNumbers.active}</h5>
                <h5 className='w-1/5 text-l text-green-200'>{e.taskNumbers.completed}</h5>
                <h5 className='w-1/5 text-l text-red-800'>{e.taskNumbers.failed}</h5>
        </div>
        })}
        </div>
       
    </div>
  )
}

export default AllTask
