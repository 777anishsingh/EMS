import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className=' flex-shrink-0 p-5  h-full w-[300px] bg-yellow-300 rounded-2xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-xs px-3 py-1 rounded-lg'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>

            <div className='mt-20'>
                <button className='bg-red-600 w-full py-1 px-2 text-sm'>Failed Task</button>
            </div>

        </div>
    )
}

export default FailedTask