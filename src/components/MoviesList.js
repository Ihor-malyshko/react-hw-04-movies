import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

export default class MoviesList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(({ id, title }) => (
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
    );
  }
}
