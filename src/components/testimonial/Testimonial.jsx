import React from 'react'
import TestimonialText from './TestimonialText';
import TestimonialImage from './TestimonialImage';

const Testimonial = () => {
  return (
    <div className='bg-[#F2F4F7] flex px-[5rem] py-[5rem]'>
        <TestimonialText />
        <TestimonialImage />
    </div>
  )
}

export default Testimonial