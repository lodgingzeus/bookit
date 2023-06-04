import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
      <>
          <footer className="flex justify-between border p-4 bg-[#fdfbfb]">
              <div>FOOTER</div>
              <Link href="#" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">About</Link>
          </footer>
      </>
    )
  }
  
  export default Footer