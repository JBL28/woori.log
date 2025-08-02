import React from 'react'

const HotBoard = () => {
  return (
    <>
    <div className='w-75 h-10/11 flex justify-evenly flex-col items-center '>

    <div className='shadow-2xl w-70 h-50 rounded-3xl flex justify-center items-center border-4 border-blue-800'>
        <div className='w-65 h-50rounded-3xl'></div>
    </div>

    <div className='shadow-2xl w-70 h-50 rounded-3xl flex justify-center items-center border-4 border-blue-900'>
        <div className='w-65 h-50 rounded-3xl'></div>
    </div>

    <div className='shadow-2xl w-70 h-50 rounded-3xl flex justify-center items-center border-4 border-blue-300'>
        <div className='w-65 h-50 rounded-3xl'></div>
    </div>
  
    </div>
    </>
  )
}

export default HotBoard