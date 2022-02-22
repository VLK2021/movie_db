import {MY_KEY_API} from "./key.api";

export const urls = {
    movies: (page) => `/discover/movie?&api_key=${MY_KEY_API}&language=uk-UK&sort_by=popularity.desc&page=${page}`,
    singleMovie: (id) => `/movie/${id}?api_key=${MY_KEY_API}`,
    trailers: (id) => `/movie/${id}/videos?api_key=${MY_KEY_API}&language=en-US`,
    genres: `/genre/movie/list?api_key=${MY_KEY_API}`,
    genresFilms: (id, page) => `/discover/movie?&language=uk-UK&api_key=${MY_KEY_API}&with_genres=${id}&page=${page}`,
    searchFilm: (word, page) => `/search/movie?api_key=${MY_KEY_API}&language=uk-UK&query=${word}&page=${page}&include_adult=false`,
    upcoming: (page) => `/movie/upcoming?api_key=${MY_KEY_API}&language=uk-UK&page=${page}`
}

