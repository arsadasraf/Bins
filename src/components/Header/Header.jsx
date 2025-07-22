import React from 'react'
import '../list.css'

export const Header = () => {
  return (
    <div className='flex w-full h-20 overflow-hidden bg-[#714b67] justify-between'>
            <div>
                <img className='w-30 h-full pl-8 p-1 rounded-2xl shadow-2xl shadow-amber-300' src="/Logo.png" alt="" srcset="" />
            </div>
            <div className='flex items-center '>
                 <a className='bg-white font-bold p-5 rounded-full shadow-2xl shadow-amber-200' href="/login">Sign in</a>
            </div>
            

    </div>
  )
}
