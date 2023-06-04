"use client"

import { useState } from "react"

const SignUp = () => {

    const [ userInfo, setUserInfo ] = useState({
      username: '',
      password: ''
    })

    const handleSubmit = async (e: any) => {
      e.preventDefault()
      console.log(userInfo)
      try {
        const response = await fetch('/api/data', {
          method: "POST",
          body: JSON.stringify({
            username: userInfo.username,
            password: userInfo.password,
          }),
        })
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

    return (
        <div className="flex container items-center justify-center h-screen w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-[#D03F71] text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="example@example.com" />
    </div>
    <div className="mb-6">
      <label className="block text-[#D03F71] text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="****" />
    </div>
    <div className="flex items-center justify-between">
      <button onClick={handleSubmit} className="border border-[#317C63] hover:bg-[#D03F71] text-[#317C63] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-[#317C63] hover:text-green-600" href="#">
        Forgot Password?
      </a>
    </div>
    <div>
        <p className="p-4 inline-block align-baseline font-bold text-sm text-[#317C63] hover:text-green-600 cursor-pointer">
            already have an account sign up?
        </p> 
    </div>
  </form>
</div>
    )
}

export default SignUp