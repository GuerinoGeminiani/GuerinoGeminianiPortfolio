"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  const handleDownload = () => {
    // Function to trigger the download
    const anchor = document.createElement('a');
    anchor.href = '/Guerino Geminani Curriculum Vitae.pdf'; // Update the path to your CV file in the /public directory
    anchor.download = 'Guerino Geminani Curriculum Vitae.pdf';
    anchor.click();
  };

  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
          <div className="lg:text-left lg:mb-4">
            <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
              <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900">
              </span>
              <br />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                <TypeAnimation
                  sequence={[
                    'Geminiani Guerino',
                    1000,
                    'TLC Engineer',
                    1000,
                    'Electronic Engineer',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
            Innovation is a reflection of our ability to funnel our creativity, channel our energy and create and shape the future in the direction of our dreams.
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-4">
        <button
          className='bg-gradient-to-br from-blue-800 via-blue-500 to-blue-300 hover:bg-slate-200 text-white px-6 py-3 rounded-full mb-4 lg:mb-0 lg:mr-4'
          onClick={() => window.open('https://www.linkedin.com/in/guerino-geminiani', '_blank')}
        >
          Get in contact
        </button>
        <button
          className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white'
          onClick={() => handleDownload()} // Trigger download on button click
        >
          Download CV
        </button>
      </div>
          </div>
        </div>
        <div className="lg:col-span-5 lg:place-self-center">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative overflow-hidden mx-auto lg:ml-0">
            <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: 'url(/images/Guerinoimg.jpg)' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
