import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

function Signup() {
    const [show, setShow] = useState(false)
    const { createUser, updateUser, validateUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                validateUser(user)
                if (user.emailVerified) {
                    updateUser(name, photo)
                        .then(() => {
                            let today = new Date()
                            const currentUser = {
                                email: user.email,
                                name: user.displayName,
                                photo: user.photoURL,
                                time: today
                            }

                            fetch(`https://heroes-united-server-arafatdayan005.vercel.app/users/${user?.email}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify(currentUser),
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.upsertedCount === 1) {
                                        const setRole = {
                                            role: "user"
                                        }

                                        fetch(`https://heroes-united-server-arafatdayan005.vercel.app/users/${user?.email}`, {
                                            method: 'PUT',
                                            headers: {
                                                'content-type': 'application/json',
                                            },
                                            body: JSON.stringify(setRole),
                                        })
                                            .then(res => res.json())
                                            .then(data => console.log(data))
                                    }
                                })
                            //navigate('/')
                        }).catch((error) => {
                            // An error occurred
                            // ...
                        });
                }
                else {
                    logOut()
                        .then(() => {
                            navigate('/signin')
                        })
                }
                updateUser(name, photo)
                    .then(() => {
                        //navigate('/')
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    return (
        <section className='2xl:h-[90vh] relative'>
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/02/Injustice-3-Marvel-vs-DC-Characters-Fighting-Game.jpg" alt="" className='h-[70vh] 2xl:h-[90vh] w-full' />
            <div className="h-full w-full absolute left-0 right-0 top-0 bg-gradient-to-r from-[#000000c0] to-[#000000c0] flex justify-center flex-wrap  lg:items-center">
                <div className="w-full px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-16 lg:w-96">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className='text-center py-5 text-3xl text-red-500 font-extrabold'>Sign Up</h2>
                    </div>

                    <form onSubmit={handleSignUp}>
                        <div className="relative z-0">
                            <input type="text" name="name" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-600 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer mb-6" placeholder=" " />
                            <label htmlFor="floating_standard" className="absolute text-sm text-red-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Username</label>
                        </div>

                        <div className="relative z-0">
                            <input type="email" name="email" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-600 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer mb-6" placeholder=" " required />
                            <label htmlFor="floating_standard" className="absolute text-sm text-red-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Email</label>
                        </div>

                        <div className="relative z-0">
                            <input type={show ? "text" : "password"} name="password" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-600 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label htmlFor="floating_standard" className="absolute text-sm text-red-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>

                        <p className='mb-4 text-white underline cursor-pointer inline-block' onClick={() => setShow(!show)}>
                            <small>
                                {
                                    show ? <span>Hide Password</span> :
                                        <span>Show Password</span>
                                }
                            </small>
                        </p>

                        <div className="relative z-0">
                            <input type="text" name="photo" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-600 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label htmlFor="floating_standard" className="absolute text-sm text-red-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Photo URL</label>
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