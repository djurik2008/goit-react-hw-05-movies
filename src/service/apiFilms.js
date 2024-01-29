import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c2cb27046eece6b474a585335d7daf3b';

export const getTrendingMovies = () =>
  axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);

export const getSearchMovie = query =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);

export const getMovieById = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

export const getMovieCast = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);

export const getMovieReviews = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
