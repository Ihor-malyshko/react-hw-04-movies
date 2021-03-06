import React, { Component } from 'react';

import MoviesList from '../components/MoviesList';
import MyLoader from '../components/MyLoader';
import Notification from '../components/Notification';
import themoviedbApi from '../services/themoviedbApi';

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    themoviedbApi
      .fetchShowTrending()
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { movies, loading, error } = this.state;
    return (
      <div>
        <h2>Trending to day</h2>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <MyLoader />}
        <MoviesList items={movies} location={this.props.location} />
      </div>
    );
  }
}
