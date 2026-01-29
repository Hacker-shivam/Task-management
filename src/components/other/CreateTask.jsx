import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData,setuserData] = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState("")
  const [taskDescription, settaskDescription] = useState("")
  const [taskDate, settaskDate] = useState("")
  const [asignTo, setasignTo] = useState("")
  const [category, setcategory] = useState("")

  const [newTask, setnewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

  

    // ✅ correct setter
    setnewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    })

    const data = userData

    
    data.forEach(function (e) {
      if (asignTo == e.name) {
        e.tasks.push(newTask)
        e.taskNumbers.newTask=e.taskNumbers.newTask+1; 
      }
    })
    setuserData(data)
    console.log(data)
    

    settaskDate('')
    setasignTo('')
    setcategory('')
    setnewTask('')
    settaskDescription('')
    settaskTitle('')


    
  }

  return (
    <div>
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={submitHandler}
          className='flex flex-wrap w-full items-start justify-between'>

          <div className='w-1/2'>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => settaskTitle(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type='text'
                placeholder='Make a Ui'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => settaskDate(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type='date'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
              <input
                value={asignTo}
                onChange={(e) => setasignTo(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type='text'
                placeholder='employee name'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type='text'
                placeholder='design, dev, etc'
              />
            </div>
          </div>

          <div className='w-1/2'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => settaskDescription(e.target.value)}
              className='text-sm py-1 px-2 w-full h-44 rounded outline-none bg-transparent border border-gray-400 mb-4'
            />

            <button
              className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
              Create task
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateTask
