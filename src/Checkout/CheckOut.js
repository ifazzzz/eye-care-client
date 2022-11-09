import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider.js/AuthProvider';

const CheckOut = ({children}) => {
    const {user} = useContext(AuthContext)
    
    if(user) {
        return children
    }
    <Navigate to='/login'></Navigate>
};

export default CheckOut;