import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider.js/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)

    const location = useLocation()

    if(loader)
        return 
        <><div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-600"></div>
    </div></>
    
    if(user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;