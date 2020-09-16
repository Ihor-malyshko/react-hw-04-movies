import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

export default class MoviesList extends Component {
  render() {
    const { items, location } = this.props;
    return (
      <ul>
        {items.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `${routes.movies}/${id}`,
                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
