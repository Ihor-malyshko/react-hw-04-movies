import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import MyLoader from '../components/MyLoader';
import Notification from '../components/Notification';
import getMovieId from '../utils/get-movies-id';
import themoviedbApi from '../services/themoviedbApi';
import routes from '../routes';
import Credits from '../components/Credits';
import Reviews from '../components/Reviews';

export default class MovieDetailsPage extends Component {
  state = {
    movie: [],
    loading: false,
    error: null,
    // from: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const showId = getMovieId(this.props.location.pathname);
    themoviedbApi
      .fetchShowDetails(showId)
      .then(movie => this.setState({ movie }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.movies);
  };

  render() {
    const { movie, loading, error } = this.state;
    const { match } = this.props;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <MyLoader />}
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <h3>{movie.title}</h3>
        {movie.poster_path && (
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
        )}
        <Link to={`${this.props.match.url}/${movie.id}/cast`}>Casts</Link>
        <Link to={`${this.props.match.url}/${movie.id}/reviews`}>Reviews</Link>
        <Route path={`${match.path}${movie.id}/cast`} component={Credits} />
        <Route path={`${match.path}${movie.id}/reviews`} component={Reviews} />
      </>
    );
  }
}
