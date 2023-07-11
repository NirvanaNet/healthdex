"use client";
import React from "react";
// import { useState } from 'react'
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Navbar from "../../components/navbar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SignInPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="w-[100vw] h-[100%] flex justify-center overflow-x-hidden">
        <div className="w-[50vw] h-[100%] m-10 flex justify-center items-center border rounded-lg border-gray-500">
          <div className="w-[80%] h-[100%] px-6 py-6 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-10 rounded-xl bg-black p-1">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black border outline-none duration-200  ease-in-out",
                      "ring-primary ring-opacity-60 outline-none ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-black  shadow"
                        : "text-white hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Sign In as a Doctor
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black border outline-none duration-200  ease-in-out ",
                      "ring-primary ring-opacity-60 outline-none ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-black  shadow"
                        : "text-white hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Sign In as a Patient
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
                <Tab.Panel className=" ">
                  <div className="w-full h-[100%] bg-black rounded-md mt-15 flex justify-center items-center">
                    <form className="text-white h-[100%] mt-15 p-5 ml-8 w-full  ">
                      <label className="block mt-5">Doctor ID</label>
                      <input
                        type="text"
                        className="bg-gray-800 block mt-3 w-full text-white  rounded outline-none p-2"
                        placeholder="Enter your doctor ID"
                      />
                      <label className="block mt-5">Email Address</label>
                      <input
                        type="email"
                        className="bg-gray-800 block mt-3 w-full text-white  rounded outline-none p-2"
                        placeholder="Enter your email address"
                      />
                      <label className="block mt-5">Enter Password</label>
                      <input
                        type="password"
                        className="bg-gray-800 block mt-3 w-full text-white  rounded outline-none p-2"
                        placeholder="Enter the password"
                      />
                      <button className="px-5 py-2  rounded-lg mt-10 bg-white text-black hover:bg-gray-300 mx-[40%]">
                        Sign In
                      </button>
                    </form>
                  </div>
                </Tab.Panel>
                {/*Patient Signup*/}
                <Tab.Panel>
                  <div className="w-[100%] h-[100%] bg-black rounded-md mt-15 ">
                    <form className="text-white h-[100%] mt-15 p-5 ml-8 w-full">
                      <label className="block mt-5">Email Address</label>
                      <input
                        type="email"
                        className="bg-gray-800 block mt-3 w-full text-white  rounded outline-none p-2"
                        placeholder="Enter your email address"
                      />
                      <label className="block mt-5">Enter Password</label>
                      <input
                        type="password"
                        className="bg-gray-800 block mt-3 w-full text-white  rounded outline-none p-2"
                        placeholder="Enter the password"
                      />

                      <button className="px-5 py-2 rounded-lg mt-10  bg-white text-black hover:bg-gray-30 mx-[40%]">
                        Sign In
                      </button>
                    </form>
                  </div>
                </Tab.Panel>
                {/* <Tab.Panel>
                Login
            </Tab.Panel> */}
              </Tab.Panels>
            </Tab.Group>
            <div className="flex justify-center items-center">

              <p>Create an account? <Link href="/signup" className="underline text-primary ">sign up here </Link> </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
