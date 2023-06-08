"use client"

import FormField from "@/components/FormField/FormField";
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const isSignUp = true

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
        const data = await response.json()
        console.log(data)
        if(data.success) toast.success(data.success)
        if(data.error) toast.warn(data.error)
      } catch (error) {
        toast.warn('Internal server error')
      }
    }

    const handleChange = (e: any) => {
      const { name, value } = e.target
      setUserInfo((prevInfo) => ({...prevInfo, [name]: value,}))
    }

    return (
  <>
    <div className="flex container items-center justify-center h-screen w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <FormField isSignUp={isSignUp} handleChange={handleChange} handleSubmit={handleSubmit}/>
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