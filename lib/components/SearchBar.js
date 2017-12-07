import React from 'react';
// importing this way we are not importing the whole library itself
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  // preferred way to collect input
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    console.log(this.state.searchTerm);
  }, 300);

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => { this.doSearch(); });
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