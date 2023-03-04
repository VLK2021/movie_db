import {Navigate, Route, Routes} from "react-router-dom";

import Layout from "./Layout/Layout";
import MoviesList from "./pages/MoviesList/MoviesList";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import './App.css';
import MovieGenres from "./pages/MovieGenres/MovieGenres";
import GenresFilmsList from "./pages/GenresFilmsList/GenresFilmsList";
import SearchFilms from "./pages/SearchFilms/SearchFilms";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewMovies from "./pages/NewMovies/NewMovies";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesList/>}/>
                    <Route path={':id'} element={<MovieDetails/>}/>
                    <Route path={'/genres'} element={<MovieGenres/>}>
                        <Route index element={<Navigate to={'/genres/35'}/>}/>
                        <Route path={'/genres/:id'} element={<GenresFilmsList/>}/>
                        <Route path={'/genres/:id/:id'} element={<MovieDetails/>}/>
                    </Route>
                    <Route path={'/search/:word'} element={<SearchFilms/>}/>
                    <Route path={'/search/:word/:id'} element={<MovieDetails/>}/>
                    <Route path={'/new_movies'} element={<NewMovies/>}/>
                    <Route path={'/new_movies/:id'} element={<MovieDetails/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
