import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: {query: term },
        headers: {
          Authorization:
          'Client-ID e39bebfab4192b093b0271a62b50aa4166da005e8afb3ee3d983218f794f3aa0'
      }
    })
    .then(response => {
      console.log(response.data.results);
    });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}


export default App;

