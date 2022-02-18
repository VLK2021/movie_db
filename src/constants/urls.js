import {MY_KEY_API} from "./key.api";

export const urls = {
    movies: (page) =>`/discover/movie?api_key=${MY_KEY_API}&language=en-US&sort_by=popularity.desc&page=${page}`,
    singleMovie:(id)=>`/movie/${id}?api_key=${MY_KEY_API}`,
    trailers:(id)=>`/movie/${id}/videos?api_key=${MY_KEY_API}&language=en-US`
}