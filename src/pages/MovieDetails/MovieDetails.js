import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";

import {getSingleMovie, getTrailer} from "../../store/slices/single.movie.slice";
import {IMG_URL} from "../../constants";
import Videos from "../../components/Videos/Videos";
import './MovieDetailsStyle.css';


const MovieDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams();


    const {singleMovieObj} = useSelector(store => store.singleMovie);
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


    return (
        <div className="movieDetails">
            <h1 className='movieDetails-title'>{original_title}</h1>

            <div className="movieDetails-block_title_and_info">
                <div className="movieDetails-img"><img src={IMG_URL + backdrop_path} alt=""/></div>

                <div className="movieDetails-block_title_and_info-block_info">
                    <div><strong className='movieDetails-info-titles'>Release date:</strong> {release_date}</div>
                    <div><strong className='movieDetails-info-titles'>Budget:</strong> {budget}</div>
                    <div><strong className='movieDetails-info-titles'>Vote average:</strong> {vote_average}</div>
                    <div><strong className='movieDetails-info-titles'>Vote count:</strong> {vote_count}</div>
                    <div><strong className='movieDetails-info-titles'>Revenue:</strong> {revenue}</div>
                    <div><strong className='movieDetails-info-titles'>Popularity:</strong> {popularity}</div>
                    <div><strong className='movieDetails-info-titles'>Original language:</strong> {original_language}
                    </div>
                </div>
            </div>

            <h3 className='movieDetails-overview'>{overview}</h3>

            <div>
                <div className='movieDetails-color-all-first'>Production companies:</div>
                <div className='movieDetails-Production_companies'>
                    {production_companies && production_companies.map(value =>
                        <div key={value.id} className='movieDetails-Production_companies-block'>
                            {value.name}
                            {<div><img className='movieDetails-Production_companies-img' src={IMG_URL + value.logo_path}
                                       alt="poster"/></div>}
                        </div>
                    )}
                </div>
            </div>

            <div className='movieDetails-genres'>
                <div className='movieDetails-color-all-first'>Genres:</div>
                <div className='movieDetails-genres-block'>{
                    genres && genres.map(value => <div key={value.id}
                                                       className='movieDetails-genres-block-one'>{value.name}</div>)
                }</div>
            </div>

            <div className='movieDetails-info'>
                <div className="movieDetails-info-videos">
                    {results && results.map(video => <Videos key={video.id} video={video}/>)}
                </div>

                <div className="homePage"><strong className='movieDetails-info-titles'>Homepage:</strong><a href={homepage}> {homepage}</a>
                </div>

            </div>

            <NavLink to={-1}>
                <button className="movieDetails-btn">Back</button>
            </NavLink>
        </div>
    );
};

export default MovieDetails;