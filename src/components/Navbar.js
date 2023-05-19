import React, { useState } from 'react'
import logo from "./../logo.png"
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='shadow-lg bg-blue-500'>
            <nav class="flex justify-between items-center w-[90%]  mx-auto">
                <div className='flex items-center my-2'>
                    <img class="w-16 cursor-pointer" src={logo} alt="..." />
                    <div className='text-white'>
                        <p className='text-2xl font-extrabold leading-none'>Heroes</p>
                        <p className='text-2xl font-extrabold lead leading-none'>United</p>
                    </div>
                </div>
                <div
                    className={`nav-links duration-500 md:static absolute bg-blue-500 md:min-h-fit min-h-[60vh] left-0 ${toggle ? "top-[-9%]" : "top-[-100%]"} md:w-auto w-full flex items-center px-5 text-white`}>
                    <ul className="flex font-bold text-lg md:flex-row flex-col md:items-center">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "py-7  bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/alltoys">All Toys</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/blogs">Blogs</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/signin">
                        <button className="bg-[#ff2519] text-white px-5 py-2 rounded-full hover:bg-[#e43030]">Sign in</button>
                    </Link>

                    <button onclick={!setToggle} name="menu" className="text-3xl cursor-pointer lg:hidden">dsfsdf</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar