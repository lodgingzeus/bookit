'use client'
import { CldUploadWidget } from "next-cloudinary"

const ImageUpload = () => {

    const handleUpload = () => {
        
    }

  return (
    <CldUploadWidget uploadPreset="cvesltdr" onUpload={handleUpload}>
    {({ open }) => {
    function handleOnClick(e: any) {
      e.preventDefault();
      open();
    }
    return (
      <button className="button" onClick={handleOnClick}>
        Upload an Image
      </button>
    );
  }}
    </CldUploadWidget>
  )
}

export default ImageUpload