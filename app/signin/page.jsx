"use client"
import Navbar from './Navbar'
import React from 'react'
// import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Signinpage = () => {    
  return (
    <div className='overflow-x-hidden'>
       <Navbar></Navbar> 
       <section className='w-[100vw] h-[100%] flex justify-center overflow-x-hidden'>
        <div className='w-[50vw] h-[100%] border-2 border-[#75D6BD] m-10 flex justify-center'>
        <div className="w-[80%] h-[100%] px-6 py-6 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-10 rounded-xl bg-black p-1">
          <Tab
              className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-gray-800  shadow'
                  : 'text-white hover:bg-white/[0.12] hover:text-white'
              )
              }
            >
              Sign Up as a Doctor
            </Tab>
            <Tab
              className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-gray-800  shadow'
                  : 'text-white hover:bg-white/[0.12] hover:text-white'
              )
              }
            >
              Sign Up as a Patient
            </Tab>
            {/* <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-gray-800 shadow'
                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Login
            </Tab> */}
        </Tab.List>
        <Tab.Panels className="mt-5">
            <Tab.Panel>
                <div className='w-[100%] h-[100%] bg-black rounded-md mt-15 '>
                    <form className='text-white h-[100%] mt-15 p-5 ml-8'>
                        <label className='block mt-5'>
                            Doctor ID
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <label className='block mt-5'>
                        Doctor Name
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <label className='block mt-5'>
                        Specialization
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <label className='block mt-5'>
                        Address
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <label className='block mt-5'>
                        Contact Number
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <button className='px-5 py-2 rounded-lg mt-10 bg-gradient-to-r from-[#75D6BD] to-[#7E46ED] mx-[40%]'>Sign Up</button>
                    </form>
                </div>
          
            </Tab.Panel>
            {/*Patient Signup*/}
            <Tab.Panel>
            <div className='w-[100%] h-[100%] bg-black rounded-md mt-15 '>
                    <form className='text-white h-[100%] mt-15 p-5 ml-8'>
                        <label className='block mt-5'>
                            Date of Registration
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <label className='block mt-5'>
                        Patient Name
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <label className='block mt-5'>
                        Age
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <label className='block mt-5'>
                        Gender
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <label className='block mt-5'>
                        Address
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <label className='block mt-5'>
                        Contact Number
                        </label>
                        <input type="text" className='bg-[#6F6F6F] block mt-3 w-[70%] text-white p-1' />
                        <button className='px-5 py-2 rounded-lg mt-10 bg-gradient-to-r from-[#75D6BD] to-[#7E46ED] mx-[40%]'>Sign Up</button>
                    </form>
                </div>
            </Tab.Panel>
            {/* <Tab.Panel>
                Login
            </Tab.Panel> */}
        </Tab.Panels>
      </Tab.Group>
    </div>
        </div>
       </section>
    </div>
  )
}

export default Signinpage