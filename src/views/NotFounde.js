import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const styles = {
  color: 'red',
};

export default function NotFounde() {
  return (
    <div>
      <h2 style={styles}>Not Founde</h2>
      <Link to={routes.homePage}>Go home</Link>
    </div>
  );
}
