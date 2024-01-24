import React, { useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='p-[1rem] w-[35rem] border-b-[1px] border-[#ededef]'>
      <div onClick={toggleAccordion} className={`flex items-center w-full justify-between text-[1rem] font-semibold ${isOpen ? 'bg-[#F9FAFB]' : ''}`}>
        <h3 className='mr-[1rem]'>{question}</h3>
        {isOpen ? <CiCircleMinus className='text-[1.5rem] text-[#98A2B3]' /> : <CiCirclePlus className='text-[1.5rem] text-[#98A2B3]' />}
      </div>
      {isOpen && (
        <div className='bg-[#F9FAFB]'>
          <p className='text-[#475467] p-[0.5rem]'>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;