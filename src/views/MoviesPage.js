import React, { Component } from 'react';
import Searchbar from '../components/searchbar/Searchbar';

export default class MoviesPage extends Component {
  state = {
    loading: false,
    error: null,
    searchQuery: '',
  };
  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    return <Searchbar onSubmit={this.handleSearchFormSubmit} />;
  }
}
