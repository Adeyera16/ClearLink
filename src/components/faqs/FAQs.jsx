import React from 'react';
import FaqSupport from './FaqSupport';
import { faqData } from './faqData';
import Accordion from './Accordion';


const FAQs = () => {
  return (
    <div className='flex px-[8rem] py-[6rem]'>
      <FaqSupport />
      <div>
        <div>
            {faqData.map((section, index) => (
              <Accordion key={section.id} question={section.question} answer={section.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs