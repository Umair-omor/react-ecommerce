import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaCircleQuestion, FaUser } from "react-icons/fa6";
import Navbar from '../navBar/Navbar';

const Header = () => {
  return (
    <div className='bg-orange-600 text-xs md:text-sm text-white xl:px-14 md:px-7 px-3 py-1 w-full sticky top-0 z-10'>
      <div className='flex justify-evenly sm:justify-between items-center py-2 gap-1 mb-auto md:pb-4 flex-col md:flex-row w-full'>
        <ul className='flex justify-center items-center flex-wrap gap-2 md:gap-3'>
          <li>
            <Link to='/seller'>Seller center</Link>
          </li>
          <li className='w-px bg-white h-4 opacity-50'></li>
          <li>
            <Link to='/download'>Download</Link>
          </li>
          <li className='w-px bg-white h-4 opacity-50'></li>
          <li className='flex justify-center items-center flex-wrap'>
            <span className='capitalize'>follow us on</span>
            <ul className='flex justify-center items-center ml-3 gap-2'>
              <li>
                <Link to='https://www.facebook.com/' target="_blank">
                  <FaFacebook className='text-base transition ease-in-out hover:scale-110' />
                </Link>
              </li>
              <li>
                <Link to='https://www.instagram.com/' target="_blank">
                  <FaInstagram className='text-base transition ease-in-out hover:scale-110' />
                </Link>
              </li>
              <li>
                <Link to='https://twitter.com/' target="_blank">
                  <FaSquareXTwitter className='text-base transition ease-in-out hover:scale-110' />
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <ul className='flex justify-center items-center py-2 sm:py-0 gap-3'>
          <li>
            <Link to='/support' className='flex justify-center items-center gap-2'>
              <FaCircleQuestion />
                <span>Support</span>
              </Link>
            </li>
            <li className='w-px bg-white h-4 opacity-50'></li>
              <li>
                <Link to='/signup'>
                  {/* <span>Register</span> */}
                    <span>Sign Up</span>
                </Link>
              </li>
              <li className='w-px bg-white h-4 opacity-50'></li>
              <li>
                <Link to='/login'>
                  <span className='flex justify-center items-center'>
                    <FaUser className='mr-2' />
                      Log in
                  </span>
                </Link>
              </li>
          </ul>
      </div>
      <div className='bg-white h-px m-auto w-full opacity-40 md:hidden mb-2'></div>
      <Navbar />
    </div>
  )
}

export default Header
