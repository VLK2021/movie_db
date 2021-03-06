import React from 'react';

import logo512 from './logo512.png'
import './FooterStyle.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-first">
                <img src={logo512} alt="logo"/>
                <div>Reakt - Redux Toolkit</div>
            </div>
            <h5>Copyright © 2022 Volodymyr Kostiuk.</h5>
        </div>
    );
};

export default Footer;