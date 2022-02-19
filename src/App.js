import {Route, Routes} from "react-router-dom";


import Layout from "./components/Layout/Layout";
import MoviesList from "./pages/MoviesList/MoviesList";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import './App.css';
import MovieGenres from "./pages/MovieGenres/MovieGenres";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesList/>}/>
                    <Route path={':id'} element={<MovieDetails/>}/>
                    <Route path={'/genres'} element={<MovieGenres/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
