import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import Swal from 'sweetalert2';

function MyToys() {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [render, setRender] = useState(false)

    useEffect(() => {
        fetch(`https://heroes-united-server-arafatdayan005.vercel.app/products/${user?.email}`)
            .then(res => res.json())
            .then(p => setData(p))
    }, [user, render])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://heroes-united-server-arafatdayan005.vercel.app/products/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                    .then(res => res.json())
                    .then(r => {
                        if (r.deletedCount == 1) {
                            setRender(!render)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <>
            <p className='text-center font-bold text-5xl tracking-tight my-16 font-serif'>My Toys</p>
            <div className='max-w-[85%] mx-auto'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-16">
                    <div className="pb-4 bg-white dark:bg-gray-900">
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Seller
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Update
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.slice(0, 20).map((d, i) =>
                                    <tr className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex ps-2 items-center">
                                                {i + 1}
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {d.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {d.seller}
                                        </td>
                                        <td className="px-6 py-4">
                                            {d.category}
                                        </td>
                                        <td className="px-6 py-4">
                                            {d.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {d.quantity}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => handleDelete(d._id)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Delete</button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MyToys