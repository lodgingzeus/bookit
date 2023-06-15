'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

const Hotels = ({ hotelList }: any) => {
  console.log(hotelList);
  let ref = useRef(null);
  const { push } = useRouter();

  const handleClick = (item: any) => {
    push(`/hotel/${item.id}`);
  };

  return (
    <div className="border border-alt">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {hotelList.map((item: any) => (
            <div
              key={item.id}
              className="relative group overflow-hidden bg-zinc-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-2xl"
            >
              <CldImage
                src={item.images[0]}
                width={500}
                height={500}
                alt="hotel image"
                className="object-cover w-full h-52"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleClick(item)}
                  className="px-6 py-3 bg-zinc-800 text-white font-semibold uppercase rounded-md hover:bg-zinc-700"
                >
                  BookIT
                </button>
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-white mb-4">{item.name}</h3>
                <hr />
                <p className="mt-2 text-white ">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
