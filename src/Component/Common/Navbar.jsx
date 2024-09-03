import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);
function Navbar() {

    AOS.init({
        duration:2000,
    });


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            {/* Top Bar with Social Media Icons */}
            <div className='bg-blue-700 w-full h-[50px] flex items-center'>
                <div className='flex-1'></div>
                <div className='flex flex-row-reverse items-center gap-2 mr-2' data-aos="fade-left">
                    <i className="p-1 text-white text-xl fa-brands fa-facebook"></i>
                    <i className="p-1 text-white text-xl fa-brands fa-twitter"></i>
                    <i className="p-1 text-white text-xl fa-brands fa-instagram"></i>
                    <i className="p-1 text-white text-xl fa-brands fa-youtube"></i>
                    <i className="p-1 text-white text-xl fa-brands fa-linkedin"></i>
                </div>
            </div>

            {/* Main Navbar */}
            <div className='h-[100px] w-fullshadow-lg shadow-black'>
                <div className='flex items-center justify-between px-4 h-full'>
                    {/* Logo */}
                    <div className='flex items-center' >
                        <img src="https://res.cloudinary.com/djh2ro9tm/image/upload/v1725283021/cjabyc36uvxtraaaihlo.png" className='h-[75px]' alt="Logo" />
                        <div className='flex flex-col ml-4  md:flex'>
                            <span className='text-blue-500 font-bold lg:text-4xl text-2xl'>Horizon Hospital</span>
                        </div>
                    </div>

                    {/* Hamburger Icon (Mobile) */}
                    <button className='text-black text-2xl md:hidden' onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    {/* Call Us and Opening Hours (Hidden on Mobile) */}
                    <div className='hidden md:flex items-center gap-4 mr-2' data-aos="fade-left">
                        <div className='flex items-center'>
                            <i className="fa-solid fa-phone text-4xl bg-blue-600 p-3 text-white rounded-full"></i>
                            <div className='flex flex-col ml-4'>
                                <span className='text-black font-bold'>Call Us</span>
                                <span className='text-black'>+123-456-7890</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <i className="fa-solid fa-clock text-4xl bg-blue-600 p-3 text-white rounded-full"></i>
                            <div className='flex flex-col ml-4'>
                                <span className='text-black font-bold'>Opening Hours</span>
                                <span className='text-black'>9 AM - 5 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <nav className='bg-darkBlue text-white shadow-lg shadow-black'>
                    <ul className='flex flex-col py-4 gap-4'>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Home</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>About</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Departments</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Services</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Contact</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Blog</a></li>
                        <li className='flex items-center ml-2'>
                            <div className="relative text-gray-600">
                                <input
                                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search"
                                    name="search"
                                    placeholder="Search"
                                />
                                <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
                                    <svg
                                        className="text-gray-600 h-4 w-4 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 56.966 56.966"
                                    >
                                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex bg-darkBlue shadow-lg shadow-black'>
                <nav className='h-full'>
                    <ul className='flex items-center gap-5 mx-5 text-xl text-white font-sans'>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Home</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>About</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Departments</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Services</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Contact</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Blog</a></li>
                        <li className='flex items-center'>
                            <div className="relative text-gray-600">
                                <input
                                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search"
                                    name="search"
                                    placeholder="Search"
                                />
                                <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
                                    <svg
                                        className="text-gray-600 h-4 w-4 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 56.966 56.966"
                                    >
                                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
