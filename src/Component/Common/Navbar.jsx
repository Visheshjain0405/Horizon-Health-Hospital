import React from 'react'

function Navbar() {
    return (
        <div>
            {/* <div className='bg-blue-300 w-full h-[50px] flex'>
                <div className='border-2 border-red-600 h-full w-1/2'></div>
                <div className='border-2 border-red-600 h-full w-1/2 flex flex-row-reverse items-center float-right'>
                    <i class="p-1 bg-blue-600 mx-2 text-white text-xl fa-brands fa-facebook"></i>
                    <i class="p-1 bg-blue-600 mx-2 text-white text-xl fa-brands fa-twitter"></i>
                    <i class="p-1 bg-blue-600 mx-2 text-white text-xl fa-brands fa-instagram"></i>
                    <i class="p-1 bg-blue-600 mx-2 text-white text-xl fa-brands fa-youtube"></i>
                    <i class="p-1 bg-blue-600 mx-2 text-white text-xl fa-brands fa-linkedin"></i>
                </div>
            </div> */}
            <div className='h-[100px] grid grid-cols-5 grid-rows-5 gap-4 place-self-center'>
                <div className="h-full col-span-3">
                    <div className='flex justify-start items-center ml-5'>
                        <img src="https://res.cloudinary.com/djh2ro9tm/image/upload/v1725283021/cjabyc36uvxtraaaihlo.png" className='h-[75px]' alt="" />
                        <div className='flex flex-col ml-4'>
                            <span className='text-black font-bold text-4xl'>Horizon Hospital</span>
                        </div>
                    </div>
                </div>
                <div className="  h-full col-start-4">
                    <div className='h-[100px] w-[250px] flex items-center'>
                        <i class="fa-solid fa-phone text-4xl bg-blue-600 p-3 text-white"></i>
                        <div className='flex flex-col ml-4'>
                            <span className='text-black font-bold'>Call Us</span>
                            <span className='text-black'>+123-456-7890</span>
                        </div>
                    </div>
                </div>
                <div className="  h-full col-start-5">
                    <div className='h-[100px] w-[250px] flex items-center'>
                        <i class="fa-solid fa-clock text-4xl bg-blue-600 p-3 text-white"></i>
                        <div className='flex flex-col ml-4'>
                            <span className='text-black font-bold'>Opening Hours</span>
                            <span className='text-black'>+123-456-7890</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='h-[75px] w-full bg-darkBlue shadow-lg shadow-black shda'>
                <nav className=' h-full'>
                    <ul className='h-full flex justify-center items-center gap-20 text-xl text-white font-sans '>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Home</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>About</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Departments</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Services</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Contact</a></li>
                        <li className='hover:bg-blue-400 p-4 rounded-xl'><a href='#'>Blog</a></li>
                        <div className="pt-2 relative text-gray-600">
                            <input
                                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                                <svg
                                    className="text-gray-600 h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    id="Capa_1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                    xmlSpace="preserve"
                                    width="512px"
                                    height="512px"
                                >
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>

                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default Navbar