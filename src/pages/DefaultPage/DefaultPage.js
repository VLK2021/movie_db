// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from "react-redux";
//
// import {getAllUpcoming} from "../../store/slices/upcoming.slice";
// import MovieCard from "../../components/MovieCard/MovieCard";
// import {Pagination} from "../../Pagination/Pagination";
// import './DefaultPageStyle.css';
//
//
// const DefaultPage = () => {
//
//     const {upcomingArr, currentPage, totalMoviesPage} = useSelector(store => store.upcomingFilms);
//     const {results, dates} = upcomingArr;
//     const {maximum, minimum} = dates;
//
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         dispatch(getAllUpcoming(currentPage))
//     }, []);
//
//
//     return (
//         <div className="DefaultPage">
//             <div className="DefaultPage-dates">
//                 <div>{maximum}</div>
//                 <div>{minimum}</div>
//             </div>
//
//             <div className="DefaultPage-films">
//                 {
//                     results && results.map(movie => <MovieCard key={movie.id} movie={movie}/>)
//                 }
//             </div>
//
//             <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllUpcoming}/>
//
//         </div>
//     );
// };
//
// export default DefaultPage;


