import {useState} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import {getAllMovies} from "../store/slices";
import {getAllGenresFilms} from "../store/slices/genresFilms.slice";
import {getAllSearch} from "../store/slices/search.slice";
import './PaginationStyle.css';
import {getAllNewMovies} from "../store/slices/newMovies.slice";
import {useTranslation} from "react-i18next";


export const Pagination = ({totalMoviesPage, currentPage, pageChange}) => {
    const {t} = useTranslation();

    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(10);

    const dispatch = useDispatch();
    const {id} = useParams();
    const {word} = useParams();

    const pages = [];

    const onAddNextPages = () => {
        if (endPage + 10 <= totalMoviesPage) {
            setStartPage(startPage + 10);
            setEndPage(endPage + 10);
        }
    };

    const onRemovePages = () => {
        if (endPage - 10 > 0) {
            setStartPage(startPage - 10);
            setEndPage(endPage - 10);
        }
    };

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const onPageChanged = (page) => {
        if (pageChange === getAllMovies) {
            dispatch(pageChange({page}));
        }
        if (pageChange === getAllGenresFilms) {
            dispatch(pageChange({id, page}));
        }
        if (pageChange === getAllSearch) {
            dispatch(pageChange({word, page}));
        }
        if (pageChange === getAllNewMovies) {
            dispatch(pageChange({page}));
        }
    };

    return (
        <div className="pagination">
            <button onClick={onRemovePages} className="pagination-btn">{t('movie-pagination-previous')}</button>

            {
                pages.map(item => <div key={item}
                                       className={`pagination-pages ${currentPage === item && 'active-page'}`}
                                       onClick={() => {
                                           onPageChanged(item);
                                       }}>{item}</div>)
            }

            <button onClick={onAddNextPages} className="pagination-btn">{t('movie-pagination-next')}</button>
        </div>
    );
};