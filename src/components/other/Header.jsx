import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (

    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username👋</span></h1>
      <button
        onClick={logoutUser}
        className='bg-blue-600 text-lg font-medium py-2 px-5'>Log out</button>
    </div>
  )
}

export default Header