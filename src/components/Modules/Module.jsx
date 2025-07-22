import React from 'react'
import Hr from './Hr'

export default function Module() {
  return (
    <div className='  grid  grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2  bg-[#FFFFFF] '>
        <Hr img={'/hr.jpg'} name={"HR"}/>
        <Hr img={'/attendance.png'} name={"FACE"}/>
        <Hr img={'/acc.jpg'} name={"Account"}/>
        <Hr img={'/ppc.png'} name={"PPC"}/>
        <Hr img={'/hr.jpg'} name={"STORE"}/>
        <Hr img={'/hr.jpg'} name={"EMPLY"}/>
    </div>
  )
}
