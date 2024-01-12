import React from 'react'
import Button from '../components/Button'
import {offer} from '../assets/images'
import { arrowRight } from '../assets/icons'


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
      <img src={offer} width={773} height={773}
      className="object-contain w-full"></img>
    </div>

    <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"><span className="text-coral-red"> Special</span> Offer</span>
      </h2>
      <p className="info-text lg:max-w-lg  font-montserrat text-lg text-slate-gray leading-8 mt-6 mb-4"> Ensuring Premium comfort and style,our meticulously crafted forever is designed to elevate your experience.providing you with unmatched quality, innovation and a touch of the elegance.</p>
      <p className="mt-2 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
      
      <div className="mt-11 flex flex-wrap gap-4">
      <Button label="View Details" iconURL={arrowRight} />
      <Button label="Learn More"
      textColor="text-slate-gray" 
       backgroundColor="bg-white"
       borderColor='border-slate-gray' 
       className='ml-2 rounded-r-full w-5 h-5' />
      </div>
       
  
      </div>

    </section>
  )
}

export default SpecialOffer;