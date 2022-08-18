import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import './SubscriptionsStyle.css';
import {getAllGenres} from "../../store/slices/genres.slice";
import {addSubscriptionS} from "../../store/slices/users.slice";


const Subscriptions = () => {
    const {genresArr} = useSelector(store => store.genresStore);
    const {genres} = genresArr;
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, []);

    const goToUserPage = () => {
        navigate('/user')
    }

    return (
        <div className={'subscriptions'}>
            <div className={'subscriptions-text'}>subscriptions</div>
            <h5 className={'h5'}>make your choice</h5>

            <div className={'subscriptionsList'}>{
                genres && genres.map(genr =>
                    <button
                        onClick={(e) => dispatch(addSubscriptionS(e.target.innerHTML))}
                        className={'genr'}
                        key={genr.id}
                    >
                        {genr.name}
                    </button>)
            }</div>


            <div className={'subscriptions-goBack-block'}>
                <button className={'subscriptions-goBack'} onClick={goToUserPage}>back to user page</button>
            </div>

        </div>
    );
};

export default Subscriptions;