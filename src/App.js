import {Route, Routes} from "react-router-dom";


import Layout from "./components/Layout/Layout";
import MoviesList from "./pages/MoviesList/MoviesList";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import './App.css';
import MovieGenres from "./pages/MovieGenres/MovieGenres";
import GenresFilmsList from "./pages/GenresFilmsList/GenresFilmsList";
import DefoultPage from "./components/DefoultPage/DefoultPage";
import SearchFilms from "./pages/SearchFilms/SearchFilms";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesList/>}/>
                    <Route path={':id'} element={<MovieDetails/>}/>
                    <Route path={'/genres'} element={<MovieGenres/>}>
                        <Route index element={<DefoultPage/>}/>
                        <Route path={'/genres/:id'} element={<GenresFilmsList/>}/>
                        <Route path={'/genres/:id/:id'} element={<MovieDetails/>}/>
                </Route>
                    <Route path={'/search'} element={<SearchFilms/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
