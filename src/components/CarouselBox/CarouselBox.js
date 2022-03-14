import React, {useEffect, useMemo} from 'react';
import Carousel from "react-bootstrap/Carousel";

import foto1 from '../../images/foto1.jpg';
import foto2 from '../../images/foto2.jpg';
import './CarouselBoxStyle.css';
import {useDispatch, useSelector} from "react-redux";
import {getAllNewMovies} from "../../store/slices/newMovies.slice";
import {IMG_URL} from "../../constants";
import {NavLink} from "react-router-dom";




const CarouselBox = () => {
    const {newMoviesArr, currentPage} = useSelector(store => store.newMoviesR);
    const {results} = newMoviesArr;
    const page = currentPage;
    console.log(results);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNewMovies(page))
    }, []);


    // const imgCarousel = newMoviesArr.results ? newMoviesArr.results.sort((a, b) => a.vote_average - b.vote_average) : [];

    // const imgCarousel = useMemo(()=>
    //     newMoviesArr.results ? newMoviesArr.results.sort((a, b) => a.vote_average - b.vote_average) : [], [newMoviesArr.results])


    // // const imgCarousel = newMoviesArr.results.sort((a, b) => a.vote_average - b.vote_average) || []

    // //  const imgCarousel = results.sort((a, b)=> a.vote_average - b.vote_average);

    const imgCarousel1 = useMemo(()=> results? results[0].backdrop_path : null, [results])
    const imgCarousel2 = useMemo(()=> results? results[1].backdrop_path : null, [results])
    const imgCarousel3 = useMemo(()=> results? results[2].backdrop_path : null, [results])

    return (
        <div className="CarouselBox">
            <Carousel className="CarouselBox-block">
                <Carousel.Item className="CarouselBox-block-section">
                    <NavLink to={'#'}><img
                        className="d-block w-100 img-b"
                        src={IMG_URL + imgCarousel1}
                        alt="foto"
                    /></NavLink>
                    <Carousel.Caption>
                        <h3>ddddddd</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="CarouselBox-block-section">
                    <img
                        className="d-block w-100 img-b"
                        src={IMG_URL + imgCarousel2}
                        alt="foto"
                    />
                    <Carousel.Caption>
                        <h3>qqqqqqqq</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="CarouselBox-block-section">
                    <img
                        className="d-block w-100 img-b"
                        src={IMG_URL + imgCarousel3}
                        alt="foto"
                    />
                    <Carousel.Caption>
                        <h3>ddddddd</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselBox;