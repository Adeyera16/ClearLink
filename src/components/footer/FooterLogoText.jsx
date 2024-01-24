import React from 'react'
import logo from '../../assets/logo.svg';
import FooterLinks from './FooterLinks';
import google from '../../assets/google.png';
import apple from '../../assets/apple.svg';

const FooterLogoText = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-[25rem]'>
        <div className='flex items-center '>
          <img src={logo} alt="logo svg" className='mr-[0.5rem]'/>
          <h5 className='text-[1.5rem] font-semibold text-[#101828]'>ClearLink <span className='text-primaryBlue'>.</span></h5>
        </div>
        <div>
            <p className='text-[#475467] text-[1.125rem]'>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
        </div>
      </div>
      <FooterLinks />
      <div>
        <h5 className='text-primaryBlue font-semibold'>Get the app</h5>
        <img src={apple} alt=""  className='py-[1rem]'/>
        <img src={google} alt="" />
      </div>
    </div>
  )
}

export default FooterLogoText