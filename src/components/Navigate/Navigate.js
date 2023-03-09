import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {BsSun, BsMoonFill} from "react-icons/bs";


import './NavigateStyle.css'
import {getAllSearch} from "../../store/slices/search.slice";


const Navigate = () => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const page = 1;

    const onsubmitForm = (e) => {
        e.preventDefault()
        let word = e.target.nameFilm.value;
        dispatch(getAllSearch({word, page}));
        navigate(`/search/${word}`);
        e.target.nameFilm.value = '';
    }

    const onchange = () => {
        document.body.classList.toggle("lightTherm")
    }

    const langHandler = (e) => {
        i18n.changeLanguage(e.target.checked ? 'ua' : 'en')
    }


    return (
        <div className='Navigate'>

            <div className={'Navigate-language'}>
                <p>en</p>

                <div className="form-switch lan">
                    <input className="form-check-input" type="checkbox" onChange={langHandler}/>
                </div>

                <p>ua</p>
            </div>

            <div className={'sunMoon'}>
                <div className={'moon'}><BsMoonFill/></div>

                <div className="form-check form-switch toggle">
                    <input className="form-check-input"
                           type="checkbox"
                           onChange={event => onchange(event.target.value)}
                    />
                </div>

                <div className={'sun'}><BsSun/></div>
            </div>

            <div className="navigate-btn">
                <NavLink to={'/'}>
                    <button>{t('movie-nav-home')}</button>
                </NavLink>

                <NavLink to={'/genres'}>
                    <button>{t('movie-nav-genres')}</button>
                </NavLink>

                <NavLink to={'/new_movies'}>
                    <button>{t('movie-nav-newMovies')}</button>
                </NavLink>
            </div>

            <div className="Navigate-form">
                <form onSubmit={onsubmitForm} name="search">
                    <input type="text" name="nameFilm" placeholder="Searsh Films..."/>
                </form>
            </div>
        </div>
    )
};

export default Navigate;