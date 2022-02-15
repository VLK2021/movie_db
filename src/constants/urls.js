import {MY_KEY_API} from "./key.api";

export const urls = {
    movies: (page) =>`/discover/movie?api_key=${MY_KEY_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
}