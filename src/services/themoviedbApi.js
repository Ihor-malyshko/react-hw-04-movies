import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const key = 'ceeec3f9fd3ea0c856548c86fe2bce84';

const fetchShowTrending = () => {
  return axios
    .get(`${baseURL}/trending/all/day?api_key=${key}`)
    .then(res => res.data.results);
};

const fetchShowSearch = string => {
  return axios
    .get(`${baseURL}/search/movie?api_key=${key}&query=${string}`)
    .then(res => res.data.results);
};

const fetchShowDetails = id => {
  return axios
    .get(`${baseURL}/movie/${id}?api_key=${key}`)
    .then(res => res.data);
};

const fetchShowCredits = id => {
  return axios
    .get(`${baseURL}/movie/${id}/credits?api_key=${key}`)
    .then(res => res.data.cast);
};

const fetchShowReviews = id => {
  return axios
    .get(`${baseURL}/movie/${id}/reviews?api_key=${key}`)
    .then(res => res.data.results);
};

export default {
  fetchShowTrending,
  fetchShowSearch,
  fetchShowDetails,
  fetchShowCredits,
  fetchShowReviews,
};
