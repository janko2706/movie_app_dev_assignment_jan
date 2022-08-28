// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = 'c83741e406c3397f4b02cd6a58e28771';
let date: Date = new Date();
let year = date.getFullYear().toString();
let monthNumber = date.getMonth() + 1;
let month = '';
if (monthNumber <= 9) {
    month = '0'+ monthNumber.toString();
}else{
    month = monthNumber.toString();
}

let day = date.getDate().toString();
let today: string = `${year}-${month}-${day}`;
const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
//GET popular in specific genres
const COMEDY_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=35`;
const ACTION_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=28`;
const ADVENTURE_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=12`;
const ANIMATION_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=16`;
const DRAMA_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=18`;
const FAMILY_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=10751`;
const HORROR_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=27`;
const LATEST_BASE_URL: string = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&release_date.lte=${today}&sort_by=release_date.desc`;

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';

export {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    COMEDY_BASE_URL,
    ACTION_BASE_URL,
    ADVENTURE_BASE_URL,
    FAMILY_BASE_URL,
    HORROR_BASE_URL,
    ANIMATION_BASE_URL,
    DRAMA_BASE_URL,
    LATEST_BASE_URL,
}