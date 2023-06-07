"use client";
import Link from "next/link"
import React from "react"
import { useState } from 'react'
import { Dialog, Popover} from '@headlessui/react'
import { signOut } from "next-auth/react";
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

type Props = {
  currentUser: any;
} 

const Header: React.FC<Props> = ( { currentUser }) => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
      <div>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">BookIT</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {currentUser ? (
            <div>hello {currentUser?.name}
              <div onClick={() => signOut()} className="px-6 py-3 inline-block text-white font-semibold tracking-tight bg-[#E75480] hover:bg-[#FC6C85] rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200 cursor-pointer">
                Sign out
              </div>
            </div>
          ) : (
            <div>
              <Link href="/auth/login" className="px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
                Log in
              </Link>
              <Link href="/auth/register" className="px-6 py-3 inline-block text-white font-semibold tracking-tight bg-[#E75480] hover:bg-[#FC6C85] rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">BookIT</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/auth/login"
                  className="-mx-3 block rounded-lg  px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
                <a 
                  href="/auth/register"
                  className="-mx-3 px-3 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200"
                >
                    Sign Up
                </a>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      </header>
      </div>
    )
  }
  
  export default Header;