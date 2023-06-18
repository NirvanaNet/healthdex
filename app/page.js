import Image from "next/image"
export default function Home() {
  return (
  <main className=" text-white">
    {/* for navbar */}
    <header className=" border-gray-100 pt-2 " >
  <div
    className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
  >
    <div className="flex items-center gap-4">
      

        <Image src="https://github.com/dakshsinghrathore/WEB3_CHAT_DAPP/assets/115932772/6ddf002f-c56a-47eb-9c3a-1dc879933054 " width={200} height={200} className="inline-block  hover:scale-110 duration-300  rounded-lg font-bold text-xl" alt="logo" />
    </div>

    <div className="flex flex-1 items-center justify-end gap-8">
      <nav
        aria-label="Global" 
        className="hidden lg:flex lg:gap-5 lg:text-[1.1rem] font-bold lg:tracking-wider lg:text-white-500"
      >
        <a
          href="/about"
          className="block h-16 hover:scale-110 duration-300 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
        >
          About
        </a>

        <a
          href="/news"
          className="block h-16 hover:scale-110 duration-300 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
        >
          News
        </a>

        <a
          href="/products"
          className="block h-16 border-b-4 hover:scale-110 duration-300 border-transparent leading-[4rem] hover:border-current hover:text-primary"
        >
          Products
        </a>

        <a
          href="/contact"
          className="block h-16 border-b-4 hover:scale-110 duration-300 border-transparent leading-[4rem] hover:border-current hover:text-primary"
        >
          Contact
        </a>
      </nav>

      
    </div>
  </div>
</header>
{/* HeroPage */}
<section className=" text-white ">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen  "
  >
    <div className="mx-auto max-w-3xl text-center  ">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl"
      >
        healthdex for secure healthcare records

      </h1>

      <p className="mx-auto mt-8 w-50 text-xl">
      HealthDex is a reliable and robust platform, its advanced features and stringent protocols offers a seamless and protected environment for storing and accessing sensitive medical information.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4 ">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-md font-medium text-white    hover:scale-110 duration-300  sm:w-auto"
          href="/get-started"
        >
          Connect with Wallet  
        </a>

        
      </div>
    </div>
  </div>
</section>
  </main>
  )
}
