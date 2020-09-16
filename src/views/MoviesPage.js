import React, { Component } from 'react';
import Searchbar from '../components/searchbar/Searchbar';
import MoviesList from '../components/MoviesList';
import MyLoader from '../components/MyLoader';
import Notification from '../components/Notification';
import getQueryParams from '../utils/get-query-params';
import themoviedbApi from '../services/themoviedbApi';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchShows(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchShows(nextQuery);
    }
  }

  fetchShows = query => {
    this.setState({ loading: true });
    themoviedbApi
      .fetchShowSearch(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeQuery} />
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <MyLoader />}
        {movies.length > 0 && (
          <MoviesList items={movies} location={this.props.location} />
        )}
      </>
    );
  }
}
