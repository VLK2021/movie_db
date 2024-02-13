import React, {useEffect, useMemo} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import './CarouselBoxStyle.css';
import {getAllNewMovies} from "../../store/slices/newMovies.slice";
import {IMG_URL} from "../../constants";


const CarouselBox = () => {
    const {newMoviesArr, currentPage} = useSelector(store => store.newMoviesR);
    const {results} = newMoviesArr;
    const page = currentPage;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNewMovies({page}))
    }, []);

    const imgCarousel1 = useMemo(() => results ? results[0].backdrop_path : null, [results]);
    const imgCarousel1Title = useMemo(() => results ? results[0].original_title : null, [results]);
    const imgCarousel1Id = useMemo(() => results ? results[0].id : null, [results]);

    const imgCarousel2 = useMemo(() => results ? results[1].backdrop_path : null, [results]);
    const imgCarousel2Title = useMemo(() => results ? results[1].original_title : null, [results]);
    const imgCarousel2Id = useMemo(() => results ? results[1].id : null, [results]);

    const imgCarousel3 = useMemo(() => results ? results[2].backdrop_path : null, [results]);
    const imgCarousel3Title = useMemo(() => results ? results[2].original_title : null, [results]);
    const imgCarousel3Id = useMemo(() => results ? results[2].id : null, [results]);

    const imgCarousel4 = useMemo(() => results ? results[3].backdrop_path : null, [results]);
    const imgCarousel4Title = useMemo(() => results ? results[3].original_title : null, [results]);
    const imgCarousel4Id = useMemo(() => results ? results[3].id : null, [results]);

    const imgCarousel5 = useMemo(() => results ? results[4].backdrop_path : null, [results]);
    const imgCarousel5Title = useMemo(() => results ? results[4].original_title : null, [results]);
    const imgCarousel5Id = useMemo(() => results ? results[4].id : null, [results]);

    return (
        <div className="CarouselBox">
            <Carousel className="CarouselBox-block">
                <Carousel.Item className="CarouselBox-block-section">
                    <NavLink to={`/new_movies/${imgCarousel1Id}`}>
                        <img
                            className="d-block w-100 img-b"
                            src={IMG_URL + imgCarousel1}
                            alt="foto"
                        />
                    </NavLink>
                    <Carousel.Caption>
                        <h3 className={'carousel-title'}>{imgCarousel1Title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="CarouselBox-block-section">
                    <NavLink to={`/new_movies/${imgCarousel2Id}`}>
                        <img
                            className="d-block w-100 img-b"
                            src={IMG_URL + imgCarousel2}
                            alt="foto"
                        />
                    </NavLink>
                    <Carousel.Caption>
                        <h3 className={'carousel-title'}>{imgCarousel2Title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="CarouselBox-block-section">
                    <NavLink to={`/new_movies/${imgCarousel3Id}`}>
                        <img
                            className="d-block w-100 img-b"
                            src={IMG_URL + imgCarousel3}
                            alt="foto"
                        />
                    </NavLink>
                    <Carousel.Caption>
                        <h3 className={'carousel-title'}>{imgCarousel3Title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="CarouselBox-block-section">
                    <NavLink to={`/new_movies/${imgCarousel4Id}`}>
                        <img
                            className="d-block w-100 img-b"
                            src={IMG_URL + imgCarousel4}
                            alt="foto"
                        />
                    </NavLink>
                    <Carousel.Caption>
                        <h3 className={'carousel-title'}>{imgCarousel4Title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="CarouselBox-block-section">
                    <NavLink to={`/new_movies/${imgCarousel5Id}`}>
                        <img
                            className="d-block w-100 img-b"
                            src={IMG_URL + imgCarousel5}
                            alt="foto"
                        />
                    </NavLink>
                    <Carousel.Caption>
                        <h3 className={'carousel-title'}>{imgCarousel5Title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselBox;