import React from 'react';
import shopify from '../../assets/Shopify.com.svg';
import coinbase from '../../assets/Coinbase.svg';
import dropbox from '../../assets/Dropbox.svg';
import intercom from '../../assets/Intercom.svg';
import marvel from '../../assets/Marvel.svg';
import automatic from '../../assets/Automattic.svg';

const Companies = () => {
  return (
    <div className='py-[6rem] px-[8rem]'>
      <div className='text-center'>
        <p className='text-[#475467] text-[1.25rem]'>Join 1,500+ companies already video conferencing the ClearLink way</p>
      </div>
      <div className='flex justify-center items-center pt-[2rem]'>
        <img src={shopify} alt="" className='w-[9.47231rem] h-[2.6875rem] mr-[1rem]'/>
        <img src={coinbase} alt="" className='w-[11.11113rem] h-[2rem] mr-[1rem]'/>
        <img src={dropbox} alt="" className='w-[11.44069rem] h-[2.25rem] mr-[1rem]'/>
        <img src={intercom} alt="" className='w-[10.90275rem] h-[2.5rem] mr-[1rem] '/>
        <img src={marvel} alt="" className='w-[6.25rem] h-[2.5rem] mr-[1rem]'/>
        <img src={automatic} alt="" className='w-[15rem] h-[1.15rem] mr-[1rem]'/>

      </div>
    </div>
  )
}

export default Companies