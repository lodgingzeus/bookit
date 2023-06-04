import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
      <>
          <footer className="flex justify-between border p-4 bg-[#fdfbfb]">
              <div>FOOTER</div>
              <Link href="#" className="bg-transparent hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white py-2 px-4 border border-[#317C63] hover:border-transparent rounded">About</Link>
          </footer>
      </>
    )
  }
  
  export default Footer