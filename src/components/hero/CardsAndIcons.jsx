import React from 'react';
import Card from './Card';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import { HiOutlineMicrophone } from "react-icons/hi";
import { FiVideo } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";


const CardsAndIcons = () => {
    const containerStyle = {
        boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
    }
  return (
    <div className='bg-[#EFF8FF] p-[2rem] border-[1px] border-[#B2DDFF] rounded-md shadow-lg shadow-gray-700/20 '>
        <div className='grid grid-cols-3 gap-2 '>
            <div className='w-[10rem] h[10rem] bg-[#FF9C66] rounded-md'>
                <img src={image1} alt="" className='w-[10rem] h-[10rem]'/>
            </div>
            <div className='w-[10rem] h[10rem] bg-[#D6BBFB] rounded-md'>
                <img src={image2} alt="" className='w-[10rem] h-[10rem]'/>
            </div>
            <div className='w-[10rem] h[10rem] bg-[#ACDB79] rounded-md'>
                <img src={image3} alt="" className='w-[10rem] h-[10rem]'/>
            </div>
            <div className='w-[10rem] h[10rem] bg-[#B3B8DB] rounded-md'>
                <img src={image4} alt="" className='w-[10rem] h-[10rem]'/>
            </div>
            <div className='w-[10rem] h[10rem] bg-[#FEC84B] rounded-md'>
                <img src={image5} alt="" className='w-[10rem] h-[10rem]'/>
            </div>
            <div className='w-[10rem] h[10rem] bg-[#FEA3B4] rounded-md'>
                <img src={image6} alt="" className='w-[10rem] h-[10rem]' />
            </div>
        </div>
        <div className='flex text-primaryBlue justify-center items-center mt-[2rem]'>
            <div className='bg-white rounded-full p-[0.75rem] mr-[1rem]'>
                <HiOutlineMicrophone className='w-[1.25rem] h-[1.25rem]'/>
            </div>
            <div className='bg-white rounded-full p-[0.75rem] mr-[1rem]'>
                <FiVideo className='w-[1.25rem] h-[1.25rem]'/>
            </div>
            <div className='bg-white rounded-full p-[0.75rem] mr-[1rem]'>
                <FiMonitor className='w-[1.25rem] h-[1.25rem]'/>
            </div>
            <div className='bg-white rounded-full p-[0.75rem] mr-[1rem]'>
                <CiFaceSmile className='w-[1.25rem] h-[1.25rem]'/>
            </div>
            <div className='bg-white rounded-full p-[0.75rem] mr-[1rem]'>
                <BiMessageRoundedDetail className='w-[1.25rem] h-[1.25rem]'/>
            </div>
            <div className='bg-white rounded-full p-[0.75rem] mr-[1rem]'>
                <CiSettings className='w-[1.25rem] h-[1.25rem]'/>
            </div>
        </div>

    </div>
  )
}

export default CardsAndIcons