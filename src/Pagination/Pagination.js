import {useState} from "react";
import {useDispatch} from "react-redux";

import {getAllMovies} from "../store/slices";
import './PaginationStyle.css';


export const Pagination = ({totalMoviesPage, currentPage, pageChange}) => {

    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(10);

    const dispatch = useDispatch();

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
    };

    return (
        <div className="pagination">
            <button onClick={onRemovePages} className="pagination-btn">Previous</button>

            {
                pages.map(item => <div key={item}
                                       className={`pagination-pages ${currentPage === item && 'active-page'}`}
                                       onClick={() => {
                                           onPageChanged(item);
                                       }}>{item}</div>)
            }

            <button onClick={onAddNextPages} className="pagination-btn">Next</button>
        </div>
    );
};