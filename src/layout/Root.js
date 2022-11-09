import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedPages/Footer/Footer';
import Header from '../sharedPages/Header/Header';

const Root = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>  
        </div>
    );
};

export default Root;