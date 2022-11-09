import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../Configurations/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

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
    
    const logOut = () => {
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