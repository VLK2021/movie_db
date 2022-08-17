import React from 'react';
import {useSelector} from "react-redux";

import './UserStyle.css';


const User = () => {
    const {user} = useSelector(store => store.getUsersAll);
    const {UserName, userLogin, userPassword} = user;

    return (
        <div className={'user'}>
            <div>Name: {UserName}</div>
            <div>Login: {userLogin}</div>
            <div>Password: {userPassword}</div>
            <button className={'user-btn'}>logout</button>
        </div>
    );
};

export default User;