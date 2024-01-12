import React from 'react';
import Button from '../components/Button';

import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Provide You
      <span className="text-coral-red"> Super
      <br />
      Quality</span> Shoes</span>
      </h2>
      <p className="info-text lg:max-w-lg  font-montserrat text-lg text-slate-gray leading-8 mt-6 mb-14"> Discover stylish Nike arrivals, Quality Comfort , and innnovation for your active life.</p>
      <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
      
      <div className="mt-11 ">
      <Button label="View Details" />
      </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8}
        width={570}
        height={522}
        className="object-contain">
        </img>
      </div>
    </section>
  )
}

export default SuperQuality;