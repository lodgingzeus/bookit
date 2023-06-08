'use client'

import { useState } from "react";
import NewListing from "@/components/NewListing/page"

const page = () => {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        location: '',
        image: null,
        amenities: '',
        description: '',
      });

      const handleSubmit = async (e: any) => {
        console.log(formData.image)
        e.preventDefault()
        try {
            const response = await fetch('/api/newlisting', {
              method: "POST",
              body: JSON.stringify({
                name: formData.name,
                price: formData.price,
                location: formData.location,
                image: formData.image,
                amenities: formData.amenities,
                description: formData.description,
              })
            })
            const data = await response.json()
            console.log(data)
          } catch (error) {
            console.log(error)
          }
      }

  return (
    <div>
        <NewListing formData = {formData} setFormData = {setFormData} handleSubmit = {handleSubmit}/>
    </div>
  )
}

export default page