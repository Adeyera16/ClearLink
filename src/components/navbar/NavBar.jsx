import React from 'react'
import logo from '../../assets/logo.svg';
import { FiChevronDown } from "react-icons/fi";


const NavBar = () => {
  return (
    <div className='px-[5rem] mt-[2rem]'>
      <nav className='flex justify-between p-[1rem] bg-[#F2F4F7] rounded-full'>
        <div className='flex items-center'>
          <img src={logo} alt="logo svg" className='mr-[0.5rem]'/>
          <h5 className='text-[1.5rem] font-semibold text-[#101828]'>ClearLink <span className='text-primaryBlue'>.</span></h5>
        </div>
        <div className='flex text-[1.125rem] text-[#667085]'>
          <div className='flex items-center mr-[2.5rem]'>
            <p>Products</p>
            <FiChevronDown />
          </div>
          <div className='flex items-center mr-[2.5rem]'>
            <p>Solutions</p>
            <FiChevronDown />
          </div>
          <div className='flex items-center mr-[2.5rem]'>
            <p>Resources</p>
            <FiChevronDown />
          </div>
          <p className='flex items-center'>Pricing</p>
        </div>
        <div>
          <button className='bg-white rounded-full text-[1rem] text-[#101828] p-[0.5rem] mr-[1rem]'>Talk to sales</button>
          <button className='bg-primaryBlue rounded-full text-[1rem] text-white  p-[0.5rem]'>Sign up for free</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar