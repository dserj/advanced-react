import ReactDOM from 'react-dom';
import React from 'react';

export default class App extends React.Component {
  state = {
    test: 443
  };

  render() {
    return <div>MyComponent {this.state.test}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
