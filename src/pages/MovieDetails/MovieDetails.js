import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";

import {getSingleMovie, getTrailer} from "../../store/slices/single.movie.slice";
import {IMG_URL} from "../../constants";
import './MovieDetailsStyle.css';


const MovieDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams();


    const {singleMovieObj} = useSelector(store => store.singleMovie);
    // console.log(singleMovieObj);

    const {results} = useSelector(store => store.singleMovie.trailerArr);


    useEffect(() => {
        dispatch(getSingleMovie({id}))
    }, []);

    useEffect(() => {
        dispatch(getTrailer({id}))
    }, []);


    const {
        backdrop_path,
        belongs_to_collection,
        budget,
        genres,
        homepage,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        production_companies,
        production_countries,
        release_date,
        revenue,
        spoken_languages,
        vote_average,
        vote_count,
        title
    } = singleMovieObj;




const rsc = 'https://www.youtube.com/embed/';





    return (
        <div className="movieDetails">
            <h1>{original_title}</h1>
            <div><img src={IMG_URL + backdrop_path} alt=""/></div>
            <h3>{overview}</h3>

            <div className='movieDetails-info'>
                <div><strong>Release_date:</strong> {release_date}</div>
                <div><strong>Budget:</strong> {budget}</div>
                <div><strong>Vote_average:</strong> {vote_average}</div>
                <div><strong>Vote_count:</strong> {vote_count}</div>
                <div><strong>Revenue:</strong> {revenue}</div>
                <div><strong>Popularity:</strong> {popularity}</div>
                <div><strong>Original language:</strong> {original_language}</div>

                <div><strong>Homepage:</strong><a href={homepage}> {homepage}</a></div>


                <div className="w">
                    <div className="c">
                        {
                            results && results.map(res => <div key={res.id}>
                                <iframe
                                    src={`${rsc}/${res.key}`}
                                    width={200}
                                    height={100}
                                    frameBorder={0}
                                    allow={'autoplay; encrypted-media'}
                                    allowFullScreen={true}
                                    title={res.name}
                                />
                            </div>)
                        }
                    </div>
                </div>
            </div>


            <NavLink to={-1}>
                <button>Back</button>
            </NavLink>
        </div>
    );
};

export default MovieDetails;