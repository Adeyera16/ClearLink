import React from 'react'
import ClearLinkHeader from './ClearLinkHeader';
import LinkAdvantageCard from './LinkAdvantageCard';
import videoRecorder from '../../assets/video-recorder.svg';
import recording from '../../assets/recording-01.svg';
import calendar from '../../assets/calendar.svg';
import lockUnlocked from '../../assets/lock-unlocked-04.svg';
import Rectangle from '../../assets/Rectangle.png';
import arrow from '../../assets/arrow.svg'

const ClearLinkAdvantage = () => {
  return (
    <div className='px-[4rem] pb-[5rem] w-full relative'>
      <ClearLinkHeader />
      <div className='flex mt-[5rem]'>
        <div className='grid grid-cols-2 gap-2 '>
          <LinkAdvantageCard
          img={videoRecorder}
          heading="Crystal-clear HD video"
          text="No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings."/>
          <LinkAdvantageCard
          img={recording}
          heading="Noise-canceling audio"
          text="Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations."/>
          <LinkAdvantageCard
          img={calendar}
          heading="Scheduling made easy"
          text="Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."/>
          <LinkAdvantageCard
          img={lockUnlocked}
          heading="Bank-grade security"
          text="Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."/>
        </div>
        <div className=''> 
            <img src={Rectangle} alt="" className=''/>
            <div>
              <img src={arrow} alt="" className='absolute top-0 right-[22%]'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ClearLinkAdvantage