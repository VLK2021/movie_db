import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './LayoutStyle.css';


const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <div className="layout-outlet"><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default Layout;