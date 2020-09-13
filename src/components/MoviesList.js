import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import themoviedbApi from '../services/themoviedbApi';

export default class MoviesList extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    themoviedbApi.fetchShowTrending().then(movies => this.setState({ movies }));
  }

  componentDidUpdate() {
    console.log(this.state.movies);
    console.log(this.props);
  }

  render() {
    const { movies } = this.state;
    return (
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${routes.movies}/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
