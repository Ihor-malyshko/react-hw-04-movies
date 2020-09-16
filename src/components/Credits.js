import React, { Component } from 'react';
// import getMovieId from '../utils/get-movies-id';
import themoviedbApi from '../services/themoviedbApi';

export default class Credits extends Component {
  state = {
    credits: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const showId = this.props.match.params.moviesId;
    themoviedbApi
      .fetchShowCredits(showId)
      .then(credits => this.setState({ credits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { credits } = this.state;
    return (
      <ul>
        {credits.length > 0 &&
          credits.map(({ profile_path, cast_id, name }) => {
            if (profile_path) {
              return (
                <li key={cast_id}>
                  <p> {name}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                    alt={name}
                  />
                </li>
              );
            }
            return null;
          })}
      </ul>
    );
  }
}
