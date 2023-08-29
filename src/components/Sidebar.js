import React, { useContext, useState } from 'react'
import { AuthContext } from './../providers/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    const [toggle, setToggle] = useState(false)
    const { user, loader, role, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    if (loader) {
        <p>loading..</p>
    }

    // if (user && role) {
    //     let userRole;

    //     if (role === "admin") {
    //         userRole =
    //             <div>
    //                 <li>
    //                     <Link to="/dashboard/admin/classes" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
    //                         <span className="ml-3">Manage Classes</span>
    //                     </Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/dashboard/admin/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
    //                         <span className="ml-3">Manage Users</span>
    //                     </Link>
    //                 </li>
    //             </div>
    //     } else if (role === "instructor") {
    //         userRole =
    //             <div>
    //                 <li>
    //                     <Link to="/dashboard/instructor/myclasses" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
    //                         <span className="ml-3">My Classes</span>
    //                     </Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/dashboard/instructor/newclass" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
    //                         <span className="ml-3">Add a class</span>
    //                     </Link>
    //                 </li>
    //             </div>
    //     } else {
    //         userRole =
    //             <div>
    //                 <li>
    //                     <Link to="/dashboard/student/myclasses" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
    //                         <span className="ml-3">Selected Classes</span>
    //                     </Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/dashboard/student/enrolled" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
    //                         <span className="ml-3">Enrolled classes</span>
    //                     </Link>
    //                 </li>
    //             </div>
    //     }

        
    // }
    return (
        <>
            <button onClick={() => setToggle(!toggle)} type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
                <div className="h-full px-3 py-4 overflow-y-auto bg-blue-100 dark:bg-gray-800">
                    <p className='text-center text-3xl font-semibold text-green-500'>Heroes United</p>
                    <div className='my-8 flex flex-col items-center'>
                        <img className='rounded-full h-24' src={user?.photoURL} alt="" />
                        <p className='text-xl font-semibold mt-4 dark:text-white'> {user?.displayName} </p>
                        <p className='capitalize bg-emerald-400 text-white px-2 rounded-full mt-2'> {role} </p>
                    </div>

                    <ul className="space-y-2 font-medium">
                        {user?.email === "admin@heroesunited.com" ? 
                        <div>
                        <li>
                            <Link to="/dashboard/admin/classes" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
                                <span className="ml-3">Manage Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/admin/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
                                <span className="ml-3">Manage Users</span>
                            </Link>
                        </li>
                    </div> : null}
                        <div className='absolute bottom-10'>
                            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
                                <span className="ml-3 pr-24">Back to Home</span>
                            </Link>
                            <button onClick={() => {
                                logOut()
                                navigate("/")
                            }} to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700">
                                <span className="ml-3 pr-36">Logout</span>
                            </button>
                        </div>
                    </ul>
                </div>
            </aside>
        </>
    )

}

export default Sidebar