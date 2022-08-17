import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faGithub, faInstagram, faFacebook, faFigma} from '@fortawesome/free-brands-svg-icons';
import {useSelector} from "react-redux";

import './HeaderStyle.css';
import LoginForm from "../LoginForm/LoginForm";


const Header = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const {user} = useSelector(store => store.getUsersAll);
    const {UserName} = user;

    const showLogin = () => {
        setShowLoginForm(showLogin => !showLogin);
    }

    return (
        <div className="header">
            <div className={'header-logo'}>
                <a href='https://www.themoviedb.org/' target='_blank'>
                    <img
                        src="//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        alt="logo"/>
                </a>
            </div>
            <h1 className={'header-text'}>THE MOVIE DB</h1>

            <div className="icons">
                <a href={'https://www.youtube.com/'} target={'_blank'}>
                    <FontAwesomeIcon icon={faYoutube} className="icons-body">Youtube</FontAwesomeIcon>
                </a>
                <a href={'https://github.com/'} target={'_blank'}>
                    <FontAwesomeIcon icon={faGithub} className="icons-body">Github</FontAwesomeIcon>
                </a>
                <a href={'https://www.instagram.com/'} target={'_blank'}>
                    <FontAwesomeIcon icon={faInstagram} className="icons-body">Instagram</FontAwesomeIcon>
                </a>
                <a href={'https://www.facebook.com/'} target={'_blank'}>
                    <FontAwesomeIcon icon={faFacebook} className="icons-body">Facebook</FontAwesomeIcon>
                </a>
                <a href={'https://www.figma.com/'} target={'_blank'}>
                    <FontAwesomeIcon icon={faFigma} className="icons-body">Figma</FontAwesomeIcon>
                </a>
            </div>

            <div className={'login'} onClick={showLogin}>{user.UserName ? UserName : 'login'}</div>
            <div className={'header-loginForm'}>{showLoginForm && <LoginForm/>}</div>
        </div>
    );
};

export default Header;