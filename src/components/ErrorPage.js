import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import img from './../images/deadpool.png'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <h2 className='font-extrabold text-9xl text-red-500'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <img src={img} className='h-96 mx-auto' alt="" />
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-red-500 text-white'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage