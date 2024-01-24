import React from 'react'
import NavBar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';
import Companies from '../components/companies/Companies';
import ClearLinkAdvantage from '../components/clearLinkAdvantage/ClearLinkAdvantage';
import Testimonial from '../components/testimonial/Testimonial';
import FAQs from '../components/faqs/FAQs';
import Trial from '../components/trial/Trial';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <Companies />
        <ClearLinkAdvantage />
        <Testimonial />
        <FAQs />
        <Trial />
        <Footer />
    </>
  )
}

export default Home