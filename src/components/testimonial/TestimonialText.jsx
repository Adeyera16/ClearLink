import React from 'react'
import shopify from '../../assets/Shopify.com.svg';
import { GoStarFill } from "react-icons/go";
import avatar from '../../assets/avatar5.png';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const TestimonialText = () => {
  return (
    <div className='mr-[2rem]'>
        <div>
            <img src={shopify} alt="" className='w-[7.04919rem] h-[2rem]'/>
            <div className='flex text-[#FDB022] text-[1.25rem] py-[2rem]'>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
            </div>
            <p className='text-[2rem] w-[35rem] text-[#101828]'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</p>
        </div>
        <div className='flex justify-between mt-[2rem]'>
            <div className='flex'>
                <img src={avatar} alt="" className='mr-[1rem]'/>
                <div>
                    <h5 className='text-[1.25rem] font-semibold text-[#101828]'>Sarah Thompson</h5>
                    <p className='text-[1.125rem] text-[#475467]'>Project Manager, Shopify</p>
                </div>
            </div>
            <div className='flex text-primaryBlue items-center'>
                <div className='rounded-full p-[1rem] bg-white mr-[1rem] cursor-pointer'>
                    <FaArrowLeft className='text-[1.5rem]'/>
                </div>
                <div className='rounded-full p-[1rem] bg-white cursor-pointer'>
                    <FaArrowRight className='text-[1.5rem]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialText