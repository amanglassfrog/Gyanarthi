
"use client"

import React, { useState } from 'react';
import logo from "../../../public/GyanarthiLogo.png";
import Image from 'next/image';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <main>
            <nav className="bg-white border-gray-200 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 container">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={logo} className="logo" alt="Flowbite Logo" />
                    </a>
                    <button onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-expanded={isDropdownOpen ? "true" : "false"}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div id="mega-menu-full" className={`items-center justify-between w-full md:flex flex-col md:w-auto md:order-1 ${isDropdownOpen ? 'block' : 'hidden'}`}>


                        <ul className="flex flex-col mt-4 headcolor font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse items-center">
                            <li>
                                <a href="/vision" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   " aria-current="page">About Us</a>
                            </li>


                            <li>
                                <a href="/admissions" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Admissions</a>
                            </li>
                            <li>
                                <a href="/placements" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Placement</a>
                            </li>
                            <li>
                                <a href="/gallery" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Campus Life</a>
                            </li>
                            <li>
                                <a href="https://kuntl.net/kumaunLinks/Result/2021?page=1" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Results</a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 px-3 applybutton text-white bg-yellow-600 border-b border-gray-100 hover:bg-yellow-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Apply Now</a>
                            </li>





                        </ul>

                    </div>
                </div>

            </nav>
        </main>
    );
};

export default Header;
