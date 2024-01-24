import React from 'react'

const LinkAdvantageCard = (props) => {
  return (
    <div>
        <div className='w-[17rem] mr-[2rem]'>
            <div className='bg-[#EAECF0] p-[0.5rem] rounded-full w-[2rem] '>
                <img src={props.img} alt="" className='w-[1.5rem]'/>
            </div>
            <h2 className='text-[1.5rem] text-[#101828]'>{props.heading}</h2>
            <p className='text-[#475467] text-[1rem]'>{props.text}</p>
        </div>

    </div>
  )
}

export default LinkAdvantageCard