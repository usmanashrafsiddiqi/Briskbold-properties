import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='min-h-screen flex items-center w-full overflow-hidden relative' id='Header'>
      {/* Optimized Background Video */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/video/0314.mp4'  
        type='video/mp4'
        autoPlay
        loop
        muted
        playsInline                // Faster loading on mobile
        disableRemotePlayback      // Prevent slow buffering from remote playback
        preload="auto"             // Faster buffering
        loading="lazy"             // Defer loading until needed
      />

      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
          Explore homes that fit your dreams
        </h2>
        <div className='space-x-6 mt-16'>
          <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
          <a 
  href="#contact" 
  className="bg-gradient-to-r from-[#0d4752] to-[#105561] text-white px-8 py-3 rounded"
>
  Contact us
</a>

        </div>
      </div>
    </div>
  );
}

export default Header;
