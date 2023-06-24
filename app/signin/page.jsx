"use client"
import React from 'react'
// import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Navbar from '../../components/navbar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Signinpage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <section className='w-[100vw] h-[100%] flex justify-center overflow-x-hidden'>
        <div className='w-[50vw] h-[100%] m-10 flex justify-center items-center border rounded-lg border-gray-500'>
          <div className="w-[80%] h-[100%] px-6 py-6 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-10 rounded-xl bg-black p-1">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white border outline-none duration-200  ease-in-out',
                      'ring-primary ring-opacity-60 outline-none ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-black  shadow'
                        : 'text-white hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  Sign Up as a Doctor
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white border outline-none duration-200  ease-in-out ',
                      'ring-primary ring-opacity-60 outline-none ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-black  shadow'
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
                    <form className='text-white h-[100%] mt-15 p-5 ml-8  '>
                      <label className='block mt-5'>
                        Doctor ID
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='Enter your doctor ID' />
                      <label className='block mt-5'>
                        Doctor Name
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='Enter your full name' />
                      <label className='block mt-5'>
                        Specialization
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='What is your specialization ' />
                      <label className='block mt-5'>
                        Address
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='Enter your address' />
                      <label className='block mt-5'>
                        Contact Number
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='Enter your mobile number' />

                      <button className='px-5 py-2  rounded-lg mt-10 bg-white text-black hover:bg-gray-300 mx-[40%]'>Sign Up</button>
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
                      <input type="datetime-local" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' />
                      <label className='block mt-5'>
                        Patient Name
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='Enter your name' />
                      <label className='block mt-5'>
                        Age
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='Enter your age' />
                      <label className='block mt-5'>
                        Gender
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='Enter your gender' />
                      <label className='block mt-5'>
                        Address
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='Enter your address' />
                      <label className='block mt-5'>
                        Contact Number
                      </label>
                      <input type="text" className='bg-gray-800 block mt-3 w-[70%] text-white  rounded outline-none p-2' placeholder='Enter your contact number' />
                      <button className='px-5 py-2 rounded-lg mt-10  bg-white text-black hover:bg-gray-30 mx-[40%]'>Sign Up</button>
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