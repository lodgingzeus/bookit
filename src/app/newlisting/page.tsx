'use client';
import React, { useState } from 'react';
import NewListing from '@/components/NewListing/page';

const Page = () => {
  const [formData, setFormData] = useState({
    hotelName: '',
    price: '',
    location: '',
    image: '',
    amenities: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch('/api/newlisting', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NewListing
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Page;
