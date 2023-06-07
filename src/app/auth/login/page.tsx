"use client"

import FormField from "@/components/FormField/FormField";
import { useState } from "react"
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const { push } = useRouter()

    const isSignUp = false
    const [ userInfo, setUserInfo ] = useState({
      email: '',
      password: ''
    })

    const handleSubmit = async (e: any) => {
      e.preventDefault()
      signIn('credentials', { ...userInfo, redirect: false})
      .then(() => {
        console.log('user is now logged in!')
        push("/")
    })
      // const {email, password } = userInfo
      // if(email == undefined || password == null) return alert('Enter all info')
      // console.log(userInfo)
      // try {
      //   const response = await fetch('/api/login', {
      //     method: "POST",
      //     body: JSON.stringify({
      //       email: email,
      //       password: password,
      //     }),
      //   })
      //   const data = await response.json()
      //   if(data.message == 'success'){ 
      //       toast.success('Logged in successfully')
      //       push("/")
      //   }
      //   if(data.error) toast.warn(data.error)
        
      // } catch (error) {
      //   toast.warn('Internal server error')
      // }
    }

    const handleChange = (e: any) => {
      const { name, value } = e.target
      setUserInfo((prevInfo) => ({...prevInfo, [name]: value}))
    }

    return (
  <>
    <div className="flex container items-center justify-center h-screen w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <FormField isSignUp={isSignUp} handleChange={handleChange} handleSubmit = {handleSubmit}/>
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