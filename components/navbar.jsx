import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className=" border-gray-100 pt-2 ">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
                <Link className="flex items-center gap-4" href="/">
                    <Image
                        src="https://github.com/dakshsinghrathore/WEB3_CHAT_DAPP/assets/115932772/6ddf002f-c56a-47eb-9c3a-1dc879933054 "
                        width={200}
                        height={200}
                        className="inline-block  hover:scale-110 duration-300  rounded-lg font-bold text-xl"
                        alt="logo"
                    />
                </Link>

                <div className="flex flex-1 items-center justify-end gap-8">
                    <nav
                        aria-label="Global"
                        className="hidden lg:flex lg:gap-5 lg:text-[1rem] font-bold lg:tracking-wider lg:text-white-500"
                    >
                        <Link
                            href="/about"
                            className="block h-16 hover:scale-110 duration-300 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
                        >
                            About
                        </Link>


                        <Link
                            href="/products"
                            className="block h-16 border-b-4 hover:scale-110 duration-300 border-transparent leading-[4rem] hover:border-current hover:text-primary"
                        >
                            Products
                        </Link>

                        <Link
                            href="/contact"
                            className="block h-16 border-b-4 hover:scale-110 duration-300 border-transparent leading-[4rem] hover:border-current hover:text-primary"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
