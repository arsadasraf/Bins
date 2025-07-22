import React from 'react'
import Hr from './Hr'

export default function Module() {
  return (
    <div className='mt-0 p-0 grid grid-cols-3 md:flex  bg-[#FFFFFF] '>
        <Hr img={'/hr.jpg'} name={"HR"}/>
        <Hr img={'/attendance.png'} name={"FACE"}/>
        <Hr img={'/acc.jpg'} name={"Account"}/>
        <Hr img={'/ppc.png'} name={"PPC"}/>
        <Hr img={'/hr.jpg'} name={"STORE"}/>
        <Hr img={'/hr.jpg'} name={"EMPLY"}/>
    </div>
  )
}
