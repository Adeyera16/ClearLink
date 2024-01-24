import React from 'react'
import TrialText from './TrialText';
import screen from '../../assets/screen.png'

const Trial = () => {
  return (
    <div className='flex'>
        <TrialText />
        <div>

        </div>
        <img src={screen} alt="" className='w-[40rem]'/>

    </div>
  )
}

export default Trial