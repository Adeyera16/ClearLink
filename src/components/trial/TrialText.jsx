import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

const TrialText = () => {
  return (
    <div className='w-full pl-[5rem] mr-[2rem]'>
        <h1 className='font-semibold text-[#101828] text-[2.5rem]'>Ready to clear the path to perfect communication?</h1>
        <ul className='text-[1.5rem] py-[1rem]'>
            <li className='flex text-[#475467] items-center p-[0.5rem]'>
                <CiCircleCheck className='text-primaryBlue mr-[0.75rem]' />
                <span>30 days free trial</span>
            </li>
            <li className='flex text-[#475467] items-center p-[0.5rem]'>
                <CiCircleCheck className='text-primaryBlue mr-[0.75rem]' />
                <span>Cancel at any time</span>
            </li>
            <li className='flex text-[#475467] items-center p-[0.5rem]'>
                <CiCircleCheck className='text-primaryBlue mr-[0.75rem]' />
                <span>Access to all features</span>
            </li>
            <li className='flex text-[#475467] items-center p-[0.5rem]'>
                <CiCircleCheck className='text-primaryBlue mr-[0.75rem]' />
                <span>Personalized onboarding</span>
            </li>
        </ul>
        <div >
            <button className='text-[1rem] p-[0.7rem] text-[#101828] border-[1px] mr-[1rem] border-[#98A2B3] rounded-full'>
                Talk to sales
            </button>
            <button className='text-[1rem] bg-primaryBlue text-white p-[0.7rem] rounded-full'>
                Start your free trial
            </button>
        </div>

    </div>
  )
}

export default TrialText