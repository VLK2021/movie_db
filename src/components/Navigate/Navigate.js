import React from 'react';

import './NavigateStyle.css'
import {NavLink} from "react-router-dom";

const Navigate = () => {

    return (
        <div className='Navigate'>
            <div className="navigate-btn">
                <NavLink to={'/'}>
                    <button>Home</button>
                </NavLink>
                <NavLink to={'/genres'}>
                    <button>All Genres</button>
                </NavLink>
            </div>

            <div className="Navigate-form">
                <form name="search">
                    <input type="text" placeholder="Searsh..."/>
                    <button>Search</button>
                </form>
            </div>
        </div>
    );
};

export default Navigate;