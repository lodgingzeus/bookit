import Link from "next/link"
import React from "react"

const Header: React.FC = () => {
    return (
      <div>
          <header className="flex justify-between border p-4 bg-[#fdfbfb]">
              <div>HEADER</div>
              <Link href="/auth/login" className="bg-transparent hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white py-2 px-4 border border-[#317C63] hover:border-transparent rounded">Login</Link>
          </header>
      </div>
    )
  }
  
  export default Header