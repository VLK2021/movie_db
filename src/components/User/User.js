import React from 'react';
import {useSelector} from "react-redux";

import './UserStyle.css';


const User = () => {
    const {user} = useSelector(store => store.getUsersAll);
    const {UserName, userLogin, userPassword, subscriptions, streamingService} = user;

    const logout = () => {
        alert('ще не придумав!!!')
    }

    return (
        <div className={'user'}>
            <h1>{UserName}</h1>

            <div className={'user-logPas'}>
                <h4 className={'user-log-login'}>Login: {userLogin}</h4>
                <h4>Password: {userPassword}</h4>
            </div>

            <button className={'user-btn'} onClick={logout}>logout</button>
        </div>
    );
};

export default User;