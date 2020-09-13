import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import themoviedbApi from '../services/themoviedbApi';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    themoviedbApi.fetchShowTrending().then(movies => this.setState({ movies }));
  }

  componentDidUpdate() {
    console.log(this.state.movies);
    console.log(this.props.match);
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2>Trending to day</h2>
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${routes.moviesDetails}${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
