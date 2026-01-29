import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')

  // }else{
  //   setUsername(data.name)
  // }
  const logOutUser =() =>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div className=' text-white flex items-end justify-between'>
      <h1 className=' text-3xl white'>Hello <br /> <span className='text-3xl font-semibold'>username</span> </h1>
      <button onClick={logOutUser} className=' text-white bg-red-500 px-5 py-2 text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
