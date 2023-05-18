import React from 'react'
import icon from './../images/social.png'
import logo from './../logo.png'

function Footer() {
    return (
        <div className='bg-black py-12'>
            <div className='w-full flex justify-center'>
                <div className='max-w-[90%]'>
                    <div className='grid grid-cols-1 lg:grid-cols-6 gap-8'>
                        <div className='col-span-2 text-white'>
                            <div className="flex items-center">
                                <img src={logo} className="w-24" alt="" />
                                <div>
                                    <p className='text-2xl text-center font-extrabold leading-none'>Heroes</p>
                                    <p className='text-4xl font-extrabold lead leading-none'>United</p>
                                </div>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <img src={icon} className='mt-4' alt="" />
                        </div>
                        <div className='col-span-1 text-white'>
                            <h3 className='mb-6 font-medium text-xl'>About Us</h3>
                            <p>Recipies</p>
                            <p>Work</p>
                            <p>Latest News</p>
                            <p>Career</p>
                        </div>
                        <div className='col-span-1 text-white'>
                            <h3 className='mb-6 font-medium text-xl'>Product</h3>
                            <p>Prototype</p>
                            <p>Plan & Pricing</p>
                            <p>Customer</p>
                            <p>Integration</p>
                        </div>
                        <div className='col-span-1 text-white'>
                            <h3 className='mb-6 font-medium text-xl'>Support</h3>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>Developers</p>
                        </div>
                        <div className='col-span-1 text-white'>
                            <h3 className='mb-6 font-medium text-xl'>Contact</h3>
                            <p>524 Gulshan, Bangladesh</p>
                            <p>+880 11111111</p>
                        </div>
                    </div>
                    <hr className='border-t border-gray-50 border-opacity-40 my-8'></hr>
                    <div className='flex justify-between text-gray-500'>
                        <p>@2023 Heroes United. All Rights Reserved</p>
                        <p>Powered by Heroes United</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer