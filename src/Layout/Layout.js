import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/Header/Header";
import './LayoutStyle.css';
import Footer from "../components/Footer/Footer";
import Navigate from "../components/Navigate/Navigate";


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