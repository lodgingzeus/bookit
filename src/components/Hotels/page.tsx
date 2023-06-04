import Image from 'next/image';
import React from 'react';
import img1 from 'src/app/images/img1.jpg';
import img2 from 'src/app/images/img2.jpg';
import img3 from 'src/app/images/img3.jpg';
import img4 from 'src/app/images/img4.jpg';

const Hotels = () => {
  const hotels = [
    { id: 1, image: img1, alt: 'Image 1', name: 'Hotel A', description: 'Description A' },
    { id: 2, image: img2, alt: 'Image 2', name: 'Hotel B', description: 'Description B' },
    { id: 3, image: img3, alt: 'Image 3', name: 'Hotel C', description: 'Description C' },
    { id: 4, image: img4, alt: 'Image 4', name: 'Hotel D', description: 'Description D' },
  ];

  return (
    <div className="overflow-x-auto border border-solid border-pink-500">
      <div className="grid grid-cols-3 gap-5 m-3 p-1">
        {hotels.map((item) => (
          <div key={item.id} className="flex flex-col justify-evenly  border border-pink-500 rounded-md p-4">
            <div>
              <Image src={item.image} alt={item.alt} className="object-cover w-full h-52 mb-4 border border-pink-500 " />
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
            <button className="flex align-middle justify-around bg-transparent border border-pink-500 hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white border-t m-1 p-1">
              BookIT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;