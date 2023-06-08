/* eslint-disable react/no-unescaped-entities */
"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const FormField = ({ isSignUp, handleChange, handleSubmit }: any) => {
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-pink-500">
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-[#D03F71] text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-[#D03F71] text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="text"
            placeholder="John@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#D03F71] text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            placeholder="****"
          />
        </div>
        <div className="flex items-center w-full">
          <button
            onClick={handleSubmit}
            className="w-full border border-[#317C63] hover:bg-[#D03F71] text-[#317C63] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
        <>
          <div className="flex flex-col gap-4 mt-3">
            <button 
              onClick={() => signIn('google')} 
              className="flex justify-center items-center w-full border border-[#317C63] hover:bg-[#D03F71] text-[#317C63] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="button"
            >
              <FcGoogle className="m-2"/> Continue with Google
            </button>
            <button 
              onClick={() => signIn('github')} 
              className="flex justify-center items-center w-full border border-[#317C63] hover:bg-[#D03F71] text-[#317C63] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="button"
            >
              <AiFillGithub className="m-2"/> Continue with Github
            </button>
          </div>
        </>
        <div className="text-neutral-500 text-center mt-4 font-light"></div>
        <div>
          <div className="p-4 inline-block align-baseline font-bold text-sm text-[#317C63] hover:text-green-600 cursor-pointer">
            {isSignUp ? (
              <div>
                <Link href={"/auth/login"}>Already have an account? Sign in</Link>
              </div>
            ) : (
              <div>
                <Link href={"/auth/register"}>Don't have an account? Sign up</Link>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormField;