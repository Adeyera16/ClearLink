import React from 'react'
import HeroText from './HeroText';
import CardsAndIcons from './CardsAndIcons';

export default function Hero() {
  return (
    <div className='flex pt-[8rem] pb-[6rem] px-[4rem]'>
      <HeroText />
      <CardsAndIcons />
    </div>
  )
}
