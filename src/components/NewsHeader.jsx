import React from 'react'

const NewsHeader = () => {
  return (
    <div className="flex">
        <div className="grow"> 
            <span className='text-sky-600 mx-4'>Current Licence: </span>
            <span className='text-gray-500 mx-4 text-[12px]'> USD/CAD</span>
            <span className='text-gray-500 mx-4 text-[12px]'> AUD/USD</span>
        </div>
        <div className="flex-row items-end justify-end max-w-30">
            <div className='text-[20px]'>Welcome Username</div>
            <div className='text-[10px]'>Good to see u again!</div>
        </div>
    </div>
  )
}

export default NewsHeader