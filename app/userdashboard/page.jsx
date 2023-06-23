import Image from "next/image";
import React from "react";
import { FaHome, FaUser, FaBriefcaseMedical } from "react-icons/fa";
const UserDashboard = () => {
  return (
    <section className="flex">
      {/* left sidebar */}

      <div className="w-[18%]  h-screen sticky top-0 bg-[#1F1F1F] ">
        <Image
          src="https://github.com/dakshsinghrathore/WEB3_CHAT_DAPP/assets/115932772/2c86e511-c1dd-4f98-9074-a3fcda69c9ab"
          width={200}
          height={100}
          alt="logo"
        />
        <div className="flex-col justify-between flex pl-8">
          <ul className="text-xl  p-2 space-y-4">
            <li className="p-2 duration-150 cursor-pointer hover:bg-primary flex items-center gap-2  rounded-lg w-[90%]">
              <span>
                <FaHome />
              </span>
              Home
            </li>
            <li className="p-2 w-[90%] flex items-center gap-2  rounded-lg duration-150 cursor-pointer hover:bg-primary">
              <span>
                <FaUser />
              </span>
              Profile
            </li>
            <li className="p-2 w-[90%] flex items-center gap-2 rounded-lg duration-150 cursor-pointer hover:bg-primary">
              <span>
                <FaBriefcaseMedical />
              </span>
              Doctor
            </li>
          </ul>
        </div>
      </div>

      {/* main content */}
      <div className="w-[82%] ml-auto p-3 ">
        <span className="flex justify-end p-2 rounded-md ">#0a1232323123</span>
        <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
          <div className="flex items-center gap-4">
            <Image
              alt="Developer"
              src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              className="h-16 w-16 rounded-full object-cover"
              width={64}
              height={64}
            />

            <div>
              <h3 className="text-lg font-medium text-white">Claire Mac</h3>

              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap">
                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      {" "}
                      Twitter{" "}
                    </a>
                  </li>

                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      {" "}
                      GitHub{" "}
                    </a>
                  </li>

                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-primary"
              >
                <strong className="font-medium text-white">Project A</strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consequuntur deleniti, unde ab ut in!
                </p>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-primary"
              >
                <strong className="font-medium text-white">Project B</strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente cumque saepe sit.
                </p>
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default UserDashboard;
