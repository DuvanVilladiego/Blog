import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav class="bg-white py-2 md:py-4">
            <div class="container px-4 mx-auto md:flex md:items-center">

            <div class="flex justify-between items-center">
                <a href="#" class="font-bold text-xl text-indigo-600">Blog</a>
                <button onClick={()=>setIsOpen(!isOpen)} class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>+
            </div>

            <div class={`${isOpen?"flex":"hidden"} md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}>
                <a href="#" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-6 00">Home</a>
                <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</a>
                <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Entrances</a>
                <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</a>
            </div>
            </div>
        </nav>
  )
}

export default Header;