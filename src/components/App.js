import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import PhotoList from './PhotoList';

class App extends Component {
  state = {
    photos: []
  };

  onSearchSubmit = async term => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ photos: res.data.results });
  };

  render() {
    const { photos } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <PhotoList photos={photos} />
      </div>
    );
  }
}

export default App;
