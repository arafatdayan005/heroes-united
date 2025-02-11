import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
import Lottie from "lottie-react";
import login from './../images/93385-login.json'
import { AuthContext } from '../providers/AuthProvider'

function Signin() {
    const [show, setShow] = useState(false)
    const [verified, setVerified] = useState(false)
    const { loginUser, googleLogin, githubLogin, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user
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
                                .then(data => {
                                    //navigate(from, { replace: true })
                                    navigate('/')
                                })
                            
                        }
                    })
                    fetch(`https://heroes-united-server-arafatdayan005.vercel.app/users/${user?.email}`)
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    if (data.role === "blocked") {
                                        logOut()
                                            .then(() => {
                                                alert("Blocked due suspecius behaviour")
                                                return
                                            }).catch((error) => {
                                                // An error happened.
                                            });
                                    }
                                    
                                })

            })
            .catch((error) => {
                alert(error)
            });

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user
                fetch(`https://heroes-united-server-arafatdayan005.vercel.app/users/${user?.email}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.role === "blocked") {
                            logOut()
                                .then(() => {
                                    alert("Blocked due suspecius behaviour")
                                    return
                                }).catch((error) => {
                                    // An error happened.
                                });

                        }
                        else {
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
                                            .then(data => {
                                                console.log(data)
                                                navigate("/")
                                            })
                                    }
                                })
                        }
                    })

            }).catch((error) => {

            });
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
            }).catch((error) => {
            });
    }

    const captchaValidate = (value) => {
        setVerified(!verified);
    }

    return (
        <section className="relative flex justify-center flex-wrap  lg:items-center">
            <div className="lg:ms-28 w-full px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-16 lg:w-96">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className='text-center py-5 text-3xl text-blue-500 font-extrabold'>Sign in</h2>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="relative">
                        <input type="email" name="email" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer mb-6" placeholder=" " required />
                        <label htmlFor="floating_outlined" className="absolute text-md text-blue-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Enter Email</label>
                    </div>

                    <div className="relative">
                        <input type={show ? "text" : "password"} name="password" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-blue-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_outlined" className="absolute text-md text-blue-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                    </div>

                    <p className='mb-0 underline cursor-pointer inline-block' onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide Password</span> :
                                    <span>Show Password</span>
                            }
                        </small>
                    </p>
                    <br />

                    <div className='flex justify-center mt-6'>
                        <ReCAPTCHA
                            sitekey="6LeyBFQnAAAAAGlMO5X1YCrD8KtNSdHfBnjJOZT-"
                            onChange={captchaValidate}
                        />
                    </div>
                    <br />

                    <div className='flex justify-center'>
                        <button className={`bg-blue-600 mx-auto text-white py-4 px-8 font-bold rounded-full ${verified ? 'hover:bg-blue-700' : 'cursor-not-allowed'}`} type="submit">Sign in</button>
                    </div>

                </form>
                <hr className='border border-blue-600 opacity-50 my-4' />
                <p className='text-center'><small>Or Sign in With</small></p>
                <div className='flex justify-center space-x-4'>
                    <img className='my-4 cursor-pointer h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" onClick={handleGoogleLogin} />
                    <img className='my-4 cursor-pointer h-8' src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" />
                    <img className='my-4 cursor-pointer h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" onClick={handleGithubLogin} />
                </div>

                <p className='text-center'><small>Don't have an account? <Link to="/signup"> <span className="text-red-500 text-xl">Signup</span></Link></small></p>
            </div>

            <div className="relative h-64 sm:h-96 lg:h-full lg:w-1/3">
                <Lottie animationData={login} loop={true} />
            </div>
        </section>
    )
}

export default Signin