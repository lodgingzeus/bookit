'use client'
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookNow = ({ hotel, currentUser }: any) => {

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  
  const handleCheckInDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOutDate(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const bookingData = {
        userId: currentUser?.id,
        hotelId: hotel?.id,
        startDate: checkInDate,
        endDate: checkOutDate,
        totalPrice: hotel?.price
    }
    try {
        const response = await fetch('/api/reservation', {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers: {
              'Content-Type': 'application/json',
            },
        })

        const data = await response.json()
        if(data.success === 'success') toast.success('Successfully reserved your hotel')
    } catch (error) {
        console.log(error)
    }

  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-2 text-left">Book Now</h3>
      <p className="text-lg">
        Check-in Date:
        <input type="date" value={checkInDate} onChange={handleCheckInDateChange} className="ml-2 border border-black" />
      </p>
      &nbsp;
      <p className="text-lg">
        Check-out Date:
        <input type="date" value={checkOutDate} onChange={handleCheckOutDateChange} className="ml-2 border border-black" />
      </p>
      &nbsp;
      <p className="text-lg">Total Price: {hotel?.price}</p>
      <button onClick={handleSubmit} className="my-3 p-2.5 px-6 py-3 bg-zinc-800 text-white font-semibold uppercase hover:bg-zinc-700">BookIT</button>
      <ToastContainer />
    </div>
  );
};

export default BookNow;
