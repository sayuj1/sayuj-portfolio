'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white font-extrabold mb-4 text-4xl sm:text-5xl lg:text-6xl'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I'm
            </span>{' '}
            <br />
            <TypeAnimation
              sequence={[
                'Sayuj Sehgal',
                1000,
                'Web Developer',
                1000,
                'Frontend Developer',
                1000,
                'Backend Developer',
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic odit,
            ratione nemo officiis dolore sint.
          </p>
          <div>
            <button className='text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  rounded-full mr-4 px-6 py-3 w-full sm:w-fit'>
              Hire Me
            </button>
            <button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white rounded-full px-1 py-1 mt-4 w-full sm:w-fit'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative'>
            <Image
              className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src='/images/sayuj-profile1.png'
              alt='Hero Image'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
