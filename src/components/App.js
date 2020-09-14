import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Navigation from './Navigation';
import NotFounde from '../views/NotFounde';
import routes from '../routes';

const HomePage = lazy(() => import('../views/HomePage'));
const MoviePage = lazy(() => import('../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));

const App = () => (
  <Layout>
    <Navigation />
    <Suspense fallback={<h2>Loader ...</h2>}>
      <Switch>
        <Route path={routes.homePage} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviePage} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route component={NotFounde} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
