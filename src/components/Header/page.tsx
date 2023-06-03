import React from 'react'
import Link from "next/link"

const Header = () => {
    return (
      <>
          <header className="flex justify-between border p-4 bg-[#fdfbfb]">
              <div>HEADER</div>
              <Link href="/auth/signup" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Login</Link>
          </header>
      </>
    )
  }
  
  export default Header