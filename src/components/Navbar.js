import React, { useContext, useState } from 'react'
import logo from "./../logo.png"
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

function Navbar() {
    const { user, logOut } = useContext(AuthContext)
    const [toggle, setToggle] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className='shadow-lg bg-blue-500'>
            <nav className="flex justify-between items-center w-[90%]  mx-auto">
                <div className='flex items-center my-2'>
                    <img className="w-16 cursor-pointer" src={logo} alt="..." />
                    <div className='text-white'>
                        <p className='text-2xl font-extrabold leading-none'>Heroes</p>
                        <p className='text-2xl font-extrabold lead leading-none'>United</p>
                    </div>
                </div>
                <div
                    /* className={`nav-links duration-500 md:static absolute bg-blue-500 md:min-h-fit min-h-[60vh] left-0 ${toggle ? "top-[-9%]" : "top-[-100%]"} md:w-auto w-full flex items-center px-5 text-white`} */ className={`nav-links duration-500 md:static absolute bg-blue-500 md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 text-white`}>
                    {
                        user ?
                            <ul className="flex font-bold text-lg md:flex-row flex-col md:items-center">
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/alltoys">All Toys</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/addtoy">Add A Toy</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/mytoys">My Toys</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/mycart">My Cart</NavLink>
                                </li>
                            </ul> :
                            <ul className="flex font-bold text-lg md:flex-row flex-col md:items-center">
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/alltoys">All Toys</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "py-7 px-6 bg-blue-400 underline" : "py-7 px-6 hover:bg-blue-400"} to="/contactus">Contact Us</NavLink>
                                </li>
                            </ul>
                    }
                </div>
                <div className="flex items-center gap-6">
                    {user ? <div className="relative" onClick={() => setToggle(!toggle)}>
                        {user?.photoURL ? <img className='h-12 w-12 rounded-full cursor-pointer' src={user?.photoURL} referrerPolicy="no-referrer" alt="" /> : <img className='h-12 rounded-full cursor-pointer' src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent.png" alt="" />}
                        {toggle && (
                            <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-52 dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div>{user?.displayName}</div>
                                    <div className="font-medium truncate">{user?.email}</div>
                                </div>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                    <li>
                                        <Link to={'/dashboard'} className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                    </li>
                                </ul>
                                <div className="py-2">
                                    <Link onClick={handleLogOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</Link>
                                </div>
                            </div>
                        )
                        }
                    </div> :
                        <Link to="/signin">
                            <button className="bg-[#ff2519] text-white px-5 py-2 rounded-full hover:bg-[#e43030]">Sign in</button>
                        </Link>}
                    {/* {
                        user && user.displayName ? <button onClick={handleLogOut}> <img className='h-12 w-12 rounded-full' title={user.displayName} src={user.photoURL} referrerPolicy='no-referrer' alt="" /> </button> :
                            <Link to="/signin">
                                <button className="bg-[#ff2519] text-white px-5 py-2 rounded-full hover:bg-[#e43030]">Sign in</button>
                            </Link>
                    } */}
                    <button /*onClick={!setToggle}*/ name="menu" className="text-3xl cursor-pointer lg:hidden">=</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar