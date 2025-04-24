import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className=' flex-shrink-0 p-5  h-full w-[300px] bg-green-400 rounded-2xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-xs px-3 py-1 rounded-lg'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>

            <div className='mt-20'>
                <button className='bg-blue-600 w-full py-1 px-2 text-sm'>Completed Task</button> 
            </div>

        </div>
    )
}

export default CompleteTask