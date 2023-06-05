"use client"

import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [isSignUp, setIsSignUp ] = useState(true)
    const [ userInfo, setUserInfo ] = useState({
      name: '',
      email: '',
      password: ''
    })

    const handleSubmit = async (e: any) => {
      e.preventDefault()
      const { name, email, password } = userInfo
      if(name == '' || email == undefined || password == null) return alert('Enter all info')
      console.log(userInfo)
      try {
        const response = await fetch('/api/signup', {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        })
        if(response.ok) toast.success('Successfully registered')
        const data = await response.json()
        console.log(data)
        
      } catch (error) {
        console.log(error)
      }
    }

    const handleChange = (e: any) => {
      const { name, value } = e.target
      setUserInfo((prevInfo) => ({...prevInfo, [name]: value}))
    }

    const switchMode = () => {
      setIsSignUp((pervIsSignUp) => !pervIsSignUp)
    }

    return (
  <>
    <div className="flex container items-center justify-center h-screen w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {isSignUp && (
        <div className="mb-4">
          <label className="block text-[#D03F71] text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="John Doe" />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-[#D03F71] text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="John@example.com" />
      </div>
      <div className="mb-6">
        <label className="block text-[#D03F71] text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="****" />
      </div>
      <div className="flex items-center w-full">
        <button onClick={handleSubmit} className="w-full border border-[#317C63] hover:bg-[#D03F71] text-[#317C63] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </div>
      <div>
          <p onClick={switchMode} className="p-4 inline-block align-baseline font-bold text-sm text-[#317C63] hover:text-green-600 cursor-pointer">
              {isSignUp ? 'already have an account? Sign in' : `don't have an account? Sign up`}
          </p> 
      </div>
    </form>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </div>
  </>
    )
}

export default SignUp