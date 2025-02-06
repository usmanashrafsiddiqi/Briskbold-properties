import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='min-h-screen flex items-center w-full overflow-hidden relative' id='Header'>
      {/* Background Video */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/video/bg.mp4'  
        type='video/mp4'
        autoPlay
        loop
        muted
      />

      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
        <div className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-white px-8 py-3 rounded'> Projects</a>
            <a href="#contact" className='bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-3 rounded'> Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
