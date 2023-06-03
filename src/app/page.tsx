/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import Image from 'next/image';
import img from 'src/app/images/img.jpg';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-200">
        <Header />
      </header>
      <main className="flex-grow">
        <div className="flex justify-center">
          <div className="w-full relative">
            <div className="h-[calc(100vh-64px)]">
              <Image src={img} alt="Hotel" className="object-cover h-full w-full filter brightness-55 hover:brightness-100 transition duration-500 ease-in-out" />
            </div>
            <div className="absolute flex flex-col items-start justify-center w-full h-full top-0 left-0 bg-black bg-opacity-50">
              <div className="p-8">
                <p className="text-white text-lg font-semibold mb-4">
                  Experience unparalleled luxury and reserve your stay at the world's most prestigious hotels.
                </p>
                <p className="text-white text-sm font-light mb-8">
                  Unlock extraordinary moments with our hassle-free hotel reservations, where sophistication meets perfection.
                </p>
                <button className="bg-white text-black hover:bg-black hover:text-white border border-black hover:border-transparent rounded-full py-2 px-4 transition duration-500 ease-in-out">
                  BookIT
                </button>
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
