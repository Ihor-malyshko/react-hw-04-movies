import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import MyLoader from '../components/MyLoader';
import Notification from '../components/Notification';
import themoviedbApi from '../services/themoviedbApi';
import routes from '../routes';
import Credits from '../components/Credits';
import Reviews from '../components/Reviews';

export default class MovieDetailsPage extends Component {
  state = {
    movie: [],
    loading: false,
    error: null,
    from: routes.homePage,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const showId = this.props.match.params.moviesId;
    themoviedbApi
      .fetchShowDetails(showId)
      .then(movie => this.setState({ movie }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
    if (this.props.location.state && this.props.location.state.from) {
      this.setState({ from: this.props.location.state.from });
    }
  }

  handleGoBack = () => {
    console.log('this.state.from', this.state.from);
    if (this.state && this.state.from) {
      console.log('if');
      return this.props.history.push(this.state.from);
    }
    this.props.history.push(routes.homePage);
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
          {this.state.from !== routes.homePage ? 'Go back' : 'Go home'}
        </button>
        <h3>{movie.title}</h3>
        {movie.poster_path && (
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
        )}

        <Link to={`${this.props.match.url}/cast`}>Casts</Link>
        <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
        <Route path={`${match.path}/cast`} component={Credits} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}
