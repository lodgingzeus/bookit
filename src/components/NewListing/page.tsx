'use client'

import { useState } from "react"
import getCurrentUser from "@/actions/getCurrentUser"
import Header from "@/components/Header/page"
import ImageUpload from "../ImageUpload/page"

const NewListing = ( { formData, setFormData, handleSubmit }: any) => {
    
      const handleChange = (e: any) => {
        // if (e.target.name === 'image') {
        //   setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.files[0],
        //   });
        // } else {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        // }
      };
    
      return (
        <form className="max-w-md mx-auto p-6 bg-white rounded shadow-lg" encType="multipart/form-data">
          <h2 className="text-2xl font-bold mb-6">Create new Listing</h2>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="hotelName">
              Hotel Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="hotelName"
              id="hotelName"
              onChange={handleChange}
              
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="price">
              Price
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="price"
              id="price"
              onChange={handleChange}
              
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="location">
              Location
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="location"
              id="location"
              onChange={handleChange}
              
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="image">
              Image
            </label>
            <ImageUpload />
            {/* <input
              className="w-full p-2 border border-gray-300 rounded"
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
              
            /> */}
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="amenities">
              Amenities
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="amenities"
              id="amenities"
              onChange={handleChange}
              
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              name="description"
              id="description"
              rows={4}
              onChange={handleChange}
              
             />
          </div>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      )
}

export default NewListing