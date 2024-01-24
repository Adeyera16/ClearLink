import React from 'react'

const FooterLinks = () => {
  return (
    <div className='flex justify-between text-[1rem] text-[#667085]'>
        <div classname="">
            <h2 className='mr-[4rem]'>Product</h2>
            <ul classname="">
                <li className="py-[0.5rem]">Overview</li>
                <li className="py-[0.5rem]">Features</li>
                <li className="py-[0.5rem]">Solutions</li>
                <li className="py-[0.5rem]">Tutorials</li>
                <li className="py-[0.5rem]">Pricing</li>
            </ul>
        </div>
        <div classname="">
            <h2 className='mr-[4rem]'>Company</h2>
            <ul classname="">
                <li className="py-[0.5rem]">About Us </li>
                <li className="py-[0.5rem]">Careers</li>
                <li className="py-[0.5rem]">Press</li>
                <li className="py-[0.5rem]">News</li>
                <li className="py-[0.5rem]">Contact</li>
            </ul>
        </div>
        <div  classname="">
            <h2 className='mr-[4rem]'>Resources</h2>
            <ul classname="">
                <li className="py-[0.5rem]">Blog</li>
                <li className="py-[0.5rem]">Event</li>
                <li className="py-[0.5rem]">Help Center</li>
                <li className="py-[0.5rem]">Tutorial</li>
                <li className="py-[0.5rem]">Support</li>
            </ul>
        </div>
        <div classname="">
            <h2 className='mr-[4rem]'>Legal</h2>
            <ul classname="">
                <li className="py-[0.5rem]">Terms</li>
                <li className="py-[0.5rem]">Privacy</li>
                <li className="py-[0.5rem]">Cookies</li>
                <li className="py-[0.5rem]">License</li>
                <li className="py-[0.5rem]">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default FooterLinks