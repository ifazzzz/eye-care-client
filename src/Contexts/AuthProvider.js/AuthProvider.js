import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Configurations/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile)
    }
  
    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }
    
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
           setLoader(false)
        })
        return () => unSubscribe();
    }, [])

    const authInfo = {
       user,
       loader,
       createUser,
       signIn,
       updateUserProfile,
       googleSignIn,
       githubSignIn,
       logOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;