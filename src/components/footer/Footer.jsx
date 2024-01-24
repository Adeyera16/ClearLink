import React from 'react'
import FooterLogoText from './FooterLogoText';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='px-[5rem] pt-[6rem]'>
      <FooterLogoText />
      <div className='flex justify-between py-[3rem]'>
        <p className='text-[#98A2B3]'>© 2023 ClearLink. All rights reserved.</p>
        <div className='flex  text-[#98A2B3]'>
          <FaLinkedin className='mr-[1rem]' />
          <FaTwitter className='mr-[1rem]' />
          <FaFacebook className='mr-[1rem]' />
          <FaInstagram className='mr-[1rem]' />
          <FaGithub className='mr-[1rem]' />
          <FaYoutube className='mr-[1rem]' />
        </div>
      </div>
    </div>
  )
}

export default Footer