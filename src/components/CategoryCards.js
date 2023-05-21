import React from 'react'
import { Link } from 'react-router-dom';

function CategoryCards({ product, tab }) {
    const { _id, name, image, price, ratings, quantity } = product;

    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
            <div className="w-full flex flex-col justify-between p-4 leading-normal">
                <div className='flex justify-between items-center max-w-[90%]'>
                    <div>
                        <p className="text-2xl font-bold tracking-tight mb-4">
                            {name}
                        </p>
                        <p className="font-normal text-gray-700">
                            <span className='font-bold'>Price:</span> {price}
                        </p>
                        <p className="font-normal text-gray-700">
                            <span className='font-bold'>Ratings:</span> {ratings}
                        </p>
                        <p className="font-normal text-gray-700">
                            <span className='font-bold'>Quantity:</span> {quantity}
                        </p>
                    </div>
                </div>
                <Link to={`/details/${_id}`}>
                    <button className={`h-10 w-24 mt-8 px-4 text-white py-2 font-bold rounded-full ${tab == "Marvel" ? "bg-red-600 hover:bg-red-700" : "" || tab == "DC" ? "bg-blue-600 hover:bg-blue-700" : "" || tab == "The Boys" ? "bg-red-600 hover:bg-red-700" : ""}`}>Details</button>
                </Link>
            </div>
        </div>
    )
}

export default CategoryCards