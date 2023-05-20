import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

    const [show, setShow] = useState(false)

    return (
        <section className='2xl:h-[90vh] relative'>
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/02/Injustice-3-Marvel-vs-DC-Characters-Fighting-Game.jpg" alt="" className='h-[70vh] 2xl:h-[90vh] w-full' />
            <div class="h-full w-full absolute left-0 right-0 top-0 bg-gradient-to-r from-[#000000c0] to-[#000000c0] flex justify-center flex-wrap  lg:items-center">
                <div class="w-full px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-16 lg:w-96">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 className='text-center py-5 text-3xl text-red-500 font-extrabold'>Sign Up</h2>
                    </div>

                    <form>
                        <div class="relative">
                            <input type="text" name="name" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-red-500 appearance-none  focus:outline-none focus:ring-0 focus:border-red-500 peer mb-6" placeholder=" " required />
                            <label for="floating_outlined" class="absolute text-md text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-black">Enter Username</label>
                        </div>

                        <div class="relative">
                            <input type="email" name="email" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-red-500 appearance-none  focus:outline-none focus:ring-0 focus:border-red-500 peer mb-6" placeholder=" " required />
                            <label for="floating_outlined" class="absolute text-md text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-black">Enter Email</label>
                        </div>

                        <div class="relative">
                            <input type={show ? "text" : "password"} name="password" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-red-500 appearance-none  focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required />
                            <label for="floating_outlined" class="absolute text-md text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-black">Password</label>
                        </div>

                        <p className='mb-4 text-white underline cursor-pointer inline-block' onClick={() => setShow(!show)}>
                            <small>
                                {
                                    show ? <span>Hide Password</span> :
                                        <span>Show Password</span>
                                }
                            </small>
                        </p>

                        <div class="relative">
                            <input type="text" name="photo" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-red-500 appearance-none  focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required />
                            <label for="floating_outlined" class="absolute text-md text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-black">Enter Photo URL</label>
                        </div>

                        <br />

                        <div className='flex justify-center'>
                            <button className='bg-red-600 mx-auto text-white py-4 px-8 font-bold rounded-full hover:bg-red-700' type="submit">Sign up</button>
                        </div>

                    </form>
                    <hr className='border border-red-500 opacity-50 my-4' />
                    <p className='text-center text-white'><small>Already have an account? <Link to="/signin"> <span className="text-blue-600 text-xl">Sign in</span></Link></small></p>
                </div>
            </div>
        </section>
    )
}

export default Signup