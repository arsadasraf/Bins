import React from 'react'

export default function Hr({img, name}) {
  return (
    <div className='flex items-center flex-col bg-[#714b67]  w-auto h-50 m-5 rounded-2xl '>
        <div>
            <img className='w-auto h-30 mt-1.5 rounded-b-full' src={img} alt="" />
        </div>
        <div>
            <h1 className='text-2xl md:text-5xl font-serif p-2 text-white'>{name}</h1>
        </div>
    </div>
  )
}
