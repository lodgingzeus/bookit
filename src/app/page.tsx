/* eslint-disable react/no-unescaped-entities */
'use client';
import './globals.css'
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from 'src/app/images/img.jpg';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-200">
        <Header />
      </header>
      <main className="flex-grow">
        <div className="flex justify-center border border-solid border-transparent ">
          <div className="w-full relative">
            <div className="h-[calc(100vh-64px)] flex items-center">
              <div className="w-1/2 pl-4">
                {showContent && (
                  <div className="typewriter">
                    <p className="text-black text-lg font-semibold mb-4">
                      Experience unparalleled luxury and <br /> reserve your stay at the world's most prestigious hotels.
                    </p>
                    <p className="text-black text-sm mb-8">
                      Unlock extraordinary moments with our hassle-free hotel reservations,<br /> where sophistication meets perfection.
                    </p>
                    <button className="bg-transparent hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white mx-2 my-4 py-2 px-4 border border-[#317C63] hover:border-transparent rounded">
                      Book Now
                    </button>
                  </div>
                )}
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 pr-4">
                <div className="relative overflow-hidden">
                  <div className="border-4 border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-transparent">
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
      <footer className="bg-gray-200">
        <Footer />
      </footer>
    </div>
  );
}