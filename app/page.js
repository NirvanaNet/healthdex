
export default function Home() {
  return (
  <main>
    {/* for navbar */}
    <header className=" border-gray-100">
  <div
    className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
  >
    <div className="flex items-center gap-4">
      <button type="button" className="p-2 lg:hidden">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <a href="#" className="flex">
        <span className="sr-only">Logo</span>
        <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
      </a>
    </div>

    <div className="flex flex-1 items-center justify-end gap-8">
      <nav
        aria-label="Global"
        className="hidden lg:flex lg:gap-4 lg:text-[1.1rem] lg:font-bold lg:tracking-wide lg:text-gray-500"
      >
        <a
          href="/about"
          className="block h-16 font-lora border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
        >
          About
        </a>

        <a
          href="/news"
          className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
        >
          News
        </a>

        <a
          href="/products"
          className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
        >
          Products
        </a>

        <a
          href="/contact"
          className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
        >
          Contact
        </a>
      </nav>

      
    </div>
  </div>
</header>
{/* HeroPage */}
<section className="bg-black text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl"
      >
        Understand User Flow.

        <span className="sm:block"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-2xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white  ver:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>






  </main>
  )
}
