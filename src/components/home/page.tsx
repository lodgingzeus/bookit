/* eslint-disable react/no-unescaped-entities */
'use client';
import './home.css'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from 'src/app/images/img.jpg';
import bg1 from 'src/app/images/bg1.jpg';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <main className="flex-grow">
      <div className="flex justify-center">
        <div className="w-full relative">
          <div className="h-[calc(100vh-64px)] relative z-10 flex items-center border border-solid border-pink-500">
            <Image src={bg1} alt='bg' className='absolute -z-0 w-full h-full opacity-90' />
            <div className="w-1/2 pl-4 typewriter ">
              <p className="text-white text-lg font-semibold mb-4 object-cover">
                Experience unparalleled luxury and <br /> reserve your stay at the world's most prestigious hotels.
              </p>
              <p className="text-white text-sm mb-8">
                Unlock extraordinary moments with our hassle-free hotel reservations,<br /> where sophistication meets perfection.
              </p>
              <button className="bg-black hover:bg-[#D03F71] text-white font-semibold hover:text-white mx-2 my-4 py-2 px-4 border border-[#317C63] hover:border-transparent rounded">
                BookIT
              </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 pr-4 flex justify-center items-end align-middle">
              <div className="relative overflow-clip border-e-2 border-t-8 border-r-8 border-b-8 border-transparent transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-opacity-100">
                <Image
                  src={img}
                  alt="Hotel"
                  className="object-cover h-fit w-fit filter brightness-55 transition-all duration-300 ease-in-out hover:brightness-100 relative right-10 bottom-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
