import React, { Component } from 'react';
import getMovieId from '../utils/get-movies-id';
import themoviedbApi from '../services/themoviedbApi';

export default class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const showId = getMovieId(this.props.location.pathname).slice(0, -8);
    themoviedbApi
      .fetchShowReviews(showId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h2> {author}</h2> <span>{content}</span>
              </li>
            );
          })
        ) : (
          <p>No Reviews</p>
        )}
      </ul>
    );
  }
}
