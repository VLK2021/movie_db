import React, {useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";


import './NavigateStyle.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllSearch} from "../../store/slices/search.slice";


const Navigate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const page = useSelector(store=>store.searchFilm.page);


    const onsubmitForm = (e) => {
        e.preventDefault()
        let word = e.target.nameFilm.value
        navigate('/search')
        dispatch(getAllSearch({word,page}))
    }

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
                <form onSubmit={onsubmitForm} name="search">
                    <input type="text" name="nameFilm" placeholder="Searsh..."/>
                    <button>Search</button>
                </form>
            </div>
        </div>
    );
};

export default Navigate;