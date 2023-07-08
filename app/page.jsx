"use client"; // this is a client-side only component
import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Navbar from "../components/navbar";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import { config } from "@onflow/fcl";
import { useRouter } from "next/navigation";
import { RouteHandlerManager } from "next/dist/server/future/route-handler-managers/route-handler-manager";

config({
  "accessNode.api": "https://rest-testnet.onflow.org", // Mainnet: "https://rest-mainnet.onflow.org"
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Mainnet: "https://fcl-discovery.onflow.org/authn"
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // for popup

  // functions for popup

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const router = useRouter();

  //function for login
  const Login = async () => {
    await fcl.authenticate().then(() => {
      fcl.currentUser.subscribe((currentUser)=> {
        localStorage.setItem("User", currentUser.addr.toString())
      })
      router.push("/signin")
    });
  };

  const user = localStorage.getItem("User")

  useEffect(()=> {
    console.log(user)
  })


  //function for logout
  const Logout = () => {
    fcl.unauthenticate()
    localStorage.removeItem("User");
    window.location.reload()
  };

  return (
    <main className=" text-white">
      {/* for navbar */}
      <Navbar />
      {/* HeroPage */}
      <section className=" text-white ">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen  ">
          <div className="mx-auto max-w-3xl text-center  ">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
              healthdex for secure healthcare records
            </h1>

            <p className="mx-auto mt-8 w-50 text-xl">
              HealthDex is a reliable and robust platform, its advanced features
              and stringent protocols offers a seamless and protected
              environment for storing and accessing sensitive medical
              information.
            </p>

            {/* conditional renedering  */}

            {!user ? 
              (<div className="mt-8 flex flex-wrap justify-center gap-4 ">
                <button
                  onClick={Login}
                  type="button"
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-md font-medium text-white    hover:scale-110 duration-300  sm:w-auto"
                >
                  Connect with Wallet
                </button>
              </div>
            ) :
            (
              <div className="mt-8 flex flex-wrap justify-center gap-4 ">
              <button
                onClick={Logout}
                type="button"
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-md font-medium text-white    hover:scale-110 duration-300  sm:w-auto"
              >
                Disconnect with Wallet
              </button>
            </div>
            )
          }     
          </div>
        </div>
      </section>

      {/* Popup code */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Wallet coming soon
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This feature is coming soon. We are working on it. Stay
                      tuned!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}
