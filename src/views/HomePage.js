import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import MoviesList from '../components/MoviesList';
import MyLoader from '../components/MyLoader';
import Notification from '../components/Notification';
import themoviedbApi from '../services/themoviedbApi';
import routes from '../routes';

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
        {/* <MoviesList items={movies} /> */}
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${routes.moviesDetails}${id}`,
                  state: { from: this.props.location },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
