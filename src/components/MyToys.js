import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import Swal from 'sweetalert2';
import { Modal } from 'flowbite-react';

function MyToys() {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [render, setRender] = useState(false)
    const [openModal, setOpenModal] = useState(false)    
    const [searchToy, setSearchToy] = useState('')
    const [modalData, setModalData] = useState({})

    useEffect(() => {
        fetch(`https://heroes-united-server-arafatdayan005.vercel.app/products/${user?.email}`)
            .then(res => res.json())
            .then(p => setData(p))
    }, [user, render])

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const _id = form.id.value;
        const name = form.name.value;
        const email = form.email.value;
        const seller = form.seller.value;
        const image = form.image.value;
        const description = form.description.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const category = form.category.value;

        const data = {
            _id,
            name,
            email,
            seller,
            image,
            description,
            price,
            ratings,
            quantity,
            category
        }

        fetch(`https://heroes-united-server-arafatdayan005.vercel.app/products/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(r => {
                if (r.modifiedCount === 1) {
                    setRender(!render)
                }
                setRender(!render)
            })
    }

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
                        if (r.deletedCount === 1) {
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
                            <input type="text" id="table-search" onChange={e => setSearchToy(e.target.value)} className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" />
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
                                data.slice(0, 20).filter(item => {
                                    return searchToy.toLowerCase() === '' ? 
                                    item : item.name.toLowerCase().includes(searchToy)
                                }).map((d, i) =>
                                    <tr key={d._id} className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                                            ${d.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {d.quantity}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => handleDelete(d._id)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Delete</button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => {
                                                setOpenModal(!openModal)
                                                setModalData(d)
                                            }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Update</button>
                                            {
                                                openModal &&
                                                <Modal
                                                className='bg-black bg-opacity-10 backdrop-blur-sm'
                                                    show={openModal}
                                                    onClose={() => {
                                                        setOpenModal(!openModal)
                                                        setRender(!render)
                                                        document.body.style.overflow = "auto"
                                                    }}
                                                >
                                                    <Modal.Header>
                                                        Update Info
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <form onSubmit={handleUpdate}>
                                                            <div className="grid gap-6 mb-2 md:grid-cols-2">
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                                                    <input type="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={modalData.name} required />
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                                                                    <input type="text" name='image' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={modalData.image} required />
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Name</label>
                                                                    <input type="text" name='seller' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={modalData.seller} required />
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                                    <input type="text" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled defaultValue={modalData.email} required />
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name='category'>
                                                                        {modalData.category === "Marvel" ? <option value="Marvel">Marvel</option> : ""}
                                                                        {modalData.category === "DC" ? <option value="DC">DC</option> : ""}
                                                                        {modalData.category === "The Boys" ? <option value="The Boys">The Boys</option> : ""}
                                                                    </select>
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                                                    <input type="number" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={modalData.price} required />
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ratings</label>
                                                                    <input type="number" name='ratings' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={modalData.ratings} required />
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                                                                    <input type="number" name='quantity' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={modalData.quantity} required />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                                                <input type="text" name='description' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={modalData.description} required />
                                                            </div>
                                                            <div>
                                                                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">id</label>
                                                                <input type="text" name='id' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hidden w-full p-2.5" defaultValue={modalData._id} required />
                                                            </div>
                                                            <div className='w-full text-center'>
                                                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 mt-4">Submit</button>
                                                            </div>
                                                        </form>
                                                    </Modal.Body>
                                                </Modal>
                                            }

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