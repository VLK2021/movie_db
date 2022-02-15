import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const moviesService = {
    getAllMovies: (page) => axiosService.get(urls.movies(page)).then(value => value.data)
}