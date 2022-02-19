import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import './MovieGenresStyle.css';
import {getAllGenres} from "../../store/slices/genres.slice";
import {Outlet} from "react-router-dom";


const MovieGenres = () => {

    const {genresArr} = useSelector(store => store.genresStore);
    const {genres} = genresArr;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, []);


    return (
        <div className="MovieGenres">
            <div className='MovieGenres-genres'>
                {genres && genres.map(value => <div key={value.id}>{value.name}</div>)}
            </div>
            <Outlet/>
        </div>
    );
};

export default MovieGenres;