import { Flower2, Search } from "lucide-react";
import PrimaryButton from "./Building Blocks/PrimaryButton";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-full bg-indigo-900/30 border-b border-indigo-900/10">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Flower2 size={24} className="w-10 h-10 text-white p-2 bg-black rounded-full" />
                    <span className="ml-3 text-xl text-white">Orchids</span>
                </a>

                <span className="ml-15 mr-auto hidden sm:flex">
                    <PrimaryButton title="Home" />
                    <PrimaryButton title="About" />
                    <PrimaryButton title="Blog" />
                    <PrimaryButton title="Contact" />
                </span>

                <span className="relative inline-flex sm:ml-auto sm:mt-0 mt-4 w-full max-w-xs">

                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full border border-indigo-200 rounded-full px-4 py-2 pr-10 bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
                    />

                    <Search
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />

                </span>
            </div>
        </header >
    );
}

export default Header;