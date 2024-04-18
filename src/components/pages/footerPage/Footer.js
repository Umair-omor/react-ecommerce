import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    var currentDate = new Date();
    console.log(currentDate.getFullYear())
    console.log(currentDate.getMonth() + 1)
    console.log(currentDate.getDate())
    console.log(currentDate.getHours())
    console.log(currentDate.getMinutes())
    console.log(currentDate.getSeconds())
  return (
    <div className='xl:px-14 md:px-7 px-4 py-6 mt-5 bg-orange-600 text-white text-sm'>
      {/* Footer<li className='w-px bg-white h-4 opacity-50'></li> */}
        <div className='flex justify-center items-center gap-3 capitalize'>
            <Link to='/privicy_policy'>privicy policy</Link>
            <div className='w-px bg-white h-4 opacity-80'></div>
            <Link to='/term-service'>term of service</Link>
            <div className='w-px bg-white h-4 opacity-80 rounded-lg'></div>
            <Link to='/about-us'>about us</Link>
        </div>
        <div className='capitalize text-center mt-3'>
            <span>&copy;{currentDate.getFullYear()}<span className='lowercase font-semibold'> Umair(omor)</span>  All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer
