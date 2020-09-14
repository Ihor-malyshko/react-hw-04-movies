import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const key = 'ceeec3f9fd3ea0c856548c86fe2bce84';

const fetchShowTrending = async () => {
  const res = await axios.get(`${baseURL}/trending/all/day?api_key=${key}`);
  return res.data.results;
};

const fetchShowSearch = async string => {
  const res = await axios.get(
    `${baseURL}/search/movie?api_key=${key}&query=${string}`,
  );
  return res.data.results;
};

const fetchShowDetails = async id => {
  const res = await axios.get(`${baseURL}/movie/${id}?api_key=${key}`);
  return res.data;
};

const fetchShowCredits = async id => {
  const res = await axios.get(`${baseURL}/movie/${id}/credits?api_key=${key}`);
  return res.data.cast;
};

const fetchShowReviews = async id => {
  const res = await axios.get(`${baseURL}/movie/${id}/reviews?api_key=${key}`);
  return res.data.results;
};

export default {
  fetchShowTrending,
  fetchShowSearch,
  fetchShowDetails,
  fetchShowCredits,
  fetchShowReviews,
};
