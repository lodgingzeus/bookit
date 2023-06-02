import Link from "next/link"

const Header = () => {
    return (
      <>
          <header className="flex justify-between border p-4 bg-[#fdfbfb]">
              <div>logo</div>
              <Link href="/auth/signup" className="bg-transparent hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white py-2 px-4 border border-[#317C63] hover:border-transparent rounded">Login</Link>
          </header>
      </>
    )
  }
  
  export default Header