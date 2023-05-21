import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Details() {
    const data = useLoaderData()
    const { _id, name, image, price, ratings, quantity, description, seller, email } = data

    return (
        <>
            <p className='text-center font-bold text-5xl tracking-tight my-16 font-serif'>{name}</p>
            <div className='max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center mb-16'>
                <img src={image} alt="" className='w-[70%]' />
                <div>
                    <p className='font-semibold text-3xl'>{description}</p>
                    <p className='text-gray-800 text-2xl my-4'><span className='text-black font-semibold tracking-tight'>Seller:</span> {seller} </p>
                    <p className='text-gray-800 text-2xl'><span className='text-black font-semibold tracking-tight'>Email:</span> {email} </p>
                    <p className='text-gray-800 text-2xl my-4'><span className='text-black font-semibold tracking-tight'>Quantity:</span> {quantity} </p>
                    <p className='text-yellow-400 font-bold text-3xl'><span className='text-green-700 font-semibold text-2xl tracking-tight'>Price:</span> {price} </p>
                    <div className='flex'>
                        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-xl shadow-blue-500/50 font-medium rounded-full text-sm px-6 py-4 text-center mr-2 mt-4 lg:mt-16">Add to Cart</button>
                        <button type="button" class="text-gray-900 bg-gradient-to-r from-yellow-200 via-yelloe-400 to-yellow-400 hover:bg-gradient-to-br shadow-xl shadow-yellow-500/50 font-medium rounded-full text-sm px-6 py-4 text-center mr-2 mt-4 lg:mt-16">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details