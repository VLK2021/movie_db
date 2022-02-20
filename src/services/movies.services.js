import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const moviesService = {
    getAllMovies: (page) => axiosService.get(urls.movies(page)).then(value => value.data),
    getSingleMovie: (id) => axiosService.get(urls.singleMovie(id)).then(value => value.data),
    getTrailer: (id) => axiosService.get(urls.trailers(id)).then(value => value.data),
    getAllGenre: () => axiosService.get(urls.genres).then(value => value.data),
    getAllGenreFilms: (id, page) => axiosService.get(urls.genresFilms(id, page)).then(value => value.data),
}