import React from 'react';
import {useSelector} from "react-redux";

import './UserStyle.css';
import {NavLink, useNavigate} from "react-router-dom";


const User = () => {
    const {user} = useSelector(store => store.getUsersAll);
    const {UserName, userLogin, userPassword, subscriptions, streamingService} = user;
    const navigate = useNavigate();

    const logout = () => {
        alert('ще не придумав!!!')
    }

    const goToSubscription = () => {
        navigate('/subscriptions')
    }

    return (
        <div className={'user'}>
            <h1>{UserName}</h1>

            <div className={'user-logPas'}>
                <h4 className={'user-log-login'}>Login: {userLogin}</h4>
                <h4>Password: {userPassword}</h4>
            </div>

            <div className={'subStrim'}>

                <div className={'user-block-subscriptions'}>
                    <div className={'user-subscriptions-text'}>subscriptions</div>

                    <div className={'user-subscriptions'}>{
                        subscriptions && subscriptions.map(value =>
                            <NavLink to={'/genres/'} key={new Date().getTime()}>
                                <div key={new Date().getTime()}>{value}</div>
                            </NavLink>)
                    }</div>


                    <button className={'user-subscriptions-btn'} onClick={goToSubscription}>watch all</button>
                </div>

                <div className={'StreamingService'}>
                    <div className={'user-streamingService-text'}>streamingService</div>

                    <div className={'user-subscriptions'}>
                        тут повинен бути список стрімів або тарифних планів
                    </div>

                    <button className={'user-subscriptions-btn'}>watch all</button>
                </div>

            </div>


            <button className={'user-btn'} onClick={logout}>logout</button>
        </div>
    );
};

export default User;