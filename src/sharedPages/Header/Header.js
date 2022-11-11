import {  Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { NavLink} from 'react-router-dom';
import logo from '../../Assests/icons8-eye-64.png';
import { AuthContext } from '../../Contexts/AuthProvider.js/AuthProvider';

const Header = () => {
    
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
         logOut()
            .then(() =>{})
            .catch((error) =>{console.error(error)})
    }

    return (
        <div className="px-12">
            <Navbar
                fluid={true}
                rounded={true}
                >
                <NavLink to='/'>
                <Navbar.Brand>
                    <img
                    src={logo}
                    className="mr-3 w-16 h-16"
                    alt="Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Eye-Care
                    </span>
                </Navbar.Brand>
                </NavLink>
                <div className="flex md:order-2">
                    {
                        user?.uid? 
                    <NavLink>                   
                    <button onClick={handleLogOut}  className="text-base text-white font-semibold px-4 py-2 rounded-md hover:bg-sky-800 bg-sky-600">Logout</button>                   
                    </NavLink>
                    :
                    <NavLink to="/login">                   
                    <button  className="text-base text-white font-semibold px-4 py-2 rounded-md hover:bg-sky-800 bg-sky-600">Login</button>                   
                    </NavLink>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink
                    className="text-base" to='/home'><Navbar.Link                    
                    >
                    Home
                    </Navbar.Link></NavLink>
                    <NavLink className="text-base" to='services'><Navbar.Link >
                    Services
                    </Navbar.Link></NavLink>
                    <NavLink className="text-base" to='Blog'><Navbar.Link >
                    Blog
                    </Navbar.Link></NavLink>
                    {user?.uid && 
                    <>
                    <NavLink className="text-base" to='myReviews'><Navbar.Link >
                    My Reviews
                    </Navbar.Link></NavLink>
                    <NavLink className="text-base" to='addService'><Navbar.Link >
                    Add Service
                    </Navbar.Link></NavLink>
                    </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;