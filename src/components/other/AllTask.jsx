import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)


  return (

    <div className='bg-[#1C1C1C] p-5 mt-5 h-auto rounded '>
      <div className='flex bg-blue-400 mb-5 py-5 px-4 justify-between rounded'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>
      <div className='h-[80%] '>
        {userData.map((e, idx) => {
          return <div key = {idx} className='flex mb-5 py-5 px-4 justify-between rounded border-2 border-emerald-400'>
            <h2 className='w-1/5  font-semibold'>{e.firstName}</h2>
            <h3 className='w-1/5 font-semibold text-blue-500'>{e.taskCounts.newTask}</h3>
            <h5 className='w-1/5 font-semibold text-yellow-400'>{e.taskCounts.active}</h5>
            <h5 className='w-1/5 font-semibold'>{e.taskCounts.completed}</h5>
            <h5 className='w-1/5 font-semibold text-red-600'>{e.taskCounts.failed}</h5>
          </div>
        })}
      </div>

    </div>
  )
}

export default AllTask