/* eslint-disable react/no-unescaped-entities */
'use client';
import 'src/app/home/home.css'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from 'src/app/images/img.jpg';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

   return (
    <main className="flex-grow">
      <div className="flex justify-center">
        <div className="w-full relative">
          <div className="h-[calc(100vh-64px)] flex items-center border border-solid border-pink-500">
            <div className="w-1/2 pl-4">
              {showContent ? (
                <div className="typewriter">
                  <p className="text-black text-lg font-semibold mb-4">
                    Experience unparalleled luxury and <br /> reserve your stay at the world's most prestigious hotels.
                  </p>
                  <p className="text-black text-sm mb-8">
                    Unlock extraordinary moments with our hassle-free hotel reservations,<br /> where sophistication meets perfection.
                  </p>
                  <button className="bg-transparent hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white mx-2 my-4 py-2 px-4 border border-[#317C63] hover:border-transparent rounded">
                    BookIT
                  </button>
                </div>
              ) : (
                <div className="typewriter invisible-cursor">
                  <p className="text-black text-lg font-semibold mb-4">
                    Experience unparalleled luxury and <br /> reserve your stay at the world's most prestigious hotels.
                  </p>
                  <p className="text-black text-sm mb-8">
                    Unlock extraordinary moments with our hassle-free hotel reservations,<br /> where sophistication meets perfection.
                  </p>
                  <button className="bg-transparent hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white mx-2 my-4 py-2 px-4 border border-[#317C63] hover:border-transparent rounded">
                    BookIT
                  </button>
                </div>
              )}
            </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 pr-4 flex justify-center items-end align-middle">
            <div className="relative overflow-hidden">
                <div className="border-e-2 border-t-8 border-r-8 border-b-8 border-transparent transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-opacity-100">
                <Image
                    src={img}
                    alt="Hotel"
                    className="object-cover h-full w-full filter brightness-55 transition-all duration-300 ease-in-out hover:brightness-100"
                />
                </div>
            </div>
            </div>


          </div>
        </div>
      </div>
    </main>
  );
}