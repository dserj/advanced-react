import React from 'react';

class SearchBar extends React.Component {
  // preferred way to collect input
  state = {
    searchTerm: ''
  };

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
    console.log(this.state.searchTerm);
  };
  render() {
    return (
      <input
        type="search"
        placeholder="Search..."
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;