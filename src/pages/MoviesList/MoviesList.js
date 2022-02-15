import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store/slices";

const MoviesList = () => {


    const {results} = useSelector(store => store.movies.moviesArr);
    const dispatch = useDispatch();

    const page = useSelector(store => store.movies.page);

    useEffect(() => {
        dispatch(getAllMovies(page))
    }, []);

    return (
        <div>
            {
                results && results.map(mov => <div key={mov.id}>{mov.original_title}</div>)
            }
        </div>
    );
};

export default MoviesList;