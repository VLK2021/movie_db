import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './LayoutStyle.css';
import Navigate from "../Navigate/Navigate";


const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Navigate/>
            <div className="layout-outlet"><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default Layout;