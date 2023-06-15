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
      <h3 className="text-xl font-bold mb-2">Book Now</h3>
      <p className="text-gray-600">
        Check-in Date:
        <input type="date" value={checkInDate} onChange={handleCheckInDateChange} className="ml-2" />
      </p>
      <p className="text-gray-600">
        Check-out Date:
        <input type="date" value={checkOutDate} onChange={handleCheckOutDateChange} className="ml-2" />
      </p>
      <p className="text-gray-600">Total Price: {hotel?.price}</p>
      <button onClick={handleSubmit} className="my-3 p-2.5 bg-transparent hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white border border-[#317C63] hover:border-transparent rounded">BookIT</button>
      <ToastContainer />
    </div>
  );
};

export default BookNow;
