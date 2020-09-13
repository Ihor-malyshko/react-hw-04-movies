import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Navigation from './Navigation';
import HomePage from '../views/HomePage';
import MoviePage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import NotFounde from '../views/NotFounde';
import routes from '../routes';

const App = () => (
  <Layout>
    <Navigation />

    <Switch>
      <Route path={routes.homePage} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviePage} />
      <Route path={routes.moviesDetails} component={MovieDetailsPage} />
      <Route component={NotFounde} />
    </Switch>
  </Layout>
);

export default App;
