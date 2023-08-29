import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            // if (currentUser?.email) {
            //     fetch('https://heroes-united-server-arafatdayan005.vercel.app/jwt', {
            //         method: 'POST',
            //         headers: {
            //             'content-type': 'application/json'
            //         },
            //         body: JSON.stringify({ email: currentUser.email })
            //     })
            //         .then(res => res.json())
            //         .then(d => {
            //             localStorage.setItem('access-token', d.token)
            //             setLoader(false)
            //         })
            // } else {
            //     localStorage.removeItem('access-token')
            //     setLoader(false)
            // }
            setLoader(false)
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                //const uid = currentUser.uid;
            } else {
                // User is signed out
            }
        });
        return () => {
            return unsubscribe();
        }

    }, [])

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const validateUser = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result)
                alert('Please Verify your email')
            })
    }

    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        updateUser,
        validateUser,
        signOut,
        logOut,
        user,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider