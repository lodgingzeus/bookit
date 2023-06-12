'use client';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hotels = ( { hotelList }: any ) => {
  console.log(hotelList)
  let ref = useRef(null);
  const { push } = useRouter()

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  let y = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const scaleVariants = {
    hover: { scale: 1.09, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' },
    initial: { scale: 1, boxShadow: 'none' },
  };

  const handleClick = (item: any) => {
    push(`/hotel/${item.id}`)
  }

  return (
    <div className="border border-solid border-pink-500 overflow-auto">
      <motion.div style={{ y, opacity }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-3 p-3">
        {hotelList.map((item: any) => (
          <motion.div
            key={item.id}
            className="text-black flex flex-col justify-between p-5 m-5 border border-solid border-pink-500 bg-slate-100"
            variants={scaleVariants}
            whileHover="hover"
            initial="initial"
          >
            <div>
              <CldImage src={item.images[0]} width={500} height={500} alt="hotel image" className="object-cover w-full h-52 mb-4" />
              <div className="text-lg text-black font-medium flex align-middle items-center justify-evenly border border-solid border-pink-500 bg-inherit rounded">
                <h3 className="m-1 p-1">{item.name}</h3>
                <p className="m-1 p-1">{item.description}</p>
              </div>
              <button onClick={() => handleClick(item)} className="my-3 p-2.5 bg-transparent hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white border border-[#317C63] hover:border-transparent rounded">
                BookIT
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hotels;
