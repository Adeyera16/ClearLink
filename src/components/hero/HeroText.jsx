import React from 'react'
import AiIcon from '../../assets/ai-icon.svg';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.png';
import { GoStarFill } from "react-icons/go";

const HeroText = () => {
  return (
    <div className='mr-[1rem]'>
        <div className='w-[36rem]'>
            <h2 className='text-[3.5rem] font-semibold text-[#1D2939]'>Uniting the world,one video call at a time</h2>
            <p className='text-[1.2rem] w-[32rem] text-[#667085]'>Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.</p>
        </div>
        <div className='flex my-[2rem]'>
            <button className='text-[1.125rem] mr-[1.25rem] bg-primaryBlue p-[1rem] rounded-[6.25rem] text-white'>Start your free trial</button>
            <div className='flex items-center'>
                <img src={AiIcon} alt="AI Icon" className='mr-[0.5rem]'/>
                <button className='text-primaryBlue'>Discover AI assistant</button>
            </div>
        </div>
        <div className='flex'>
            <div className='flex mr-[10rem]'>
                <img src={avatar1} alt="avatar" className='relative '/>
                <div>
                    <img src={avatar1} alt="avatar" className='absolute left-[5rem]'/>
                    <img src={avatar2} alt="avatar" className='absolute left-[7rem)'/>
                    <img src={avatar3} alt="avarar" className='absolute left-[9rem]'/>
                    <img src={avatar4} alt="avatar" className='absolute left-[11rem]'/>
                </div>
            </div>
            <div >
                <div className='flex items-center text-[#FDB022] text-[0.85rem]'>
                    <GoStarFill className='mr-[0.4rem]'/>
                    <GoStarFill className='mr-[0.4rem]'/>
                    <GoStarFill className='mr-[0.4rem]'/>
                    <GoStarFill className='mr-[0.4rem]'/>
                    <GoStarFill className='mr-[0.4rem]'/>
                    <p className='text-[#344054] text-[0.85rem]'>5.0</p>
                </div>
                <p className='text-[#475467] text-[0.85rem]'>from 3,000+ reviews</p>
            </div>
        </div>
    </div>
  )
}

export default HeroText