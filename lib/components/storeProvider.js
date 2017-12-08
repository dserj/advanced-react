import React from 'react';
import PropTypes from 'prop-types';

// function that returns another function
const storeProvider = (extraProps = () => ({})) => ((Component) => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    };
    state = this.usedState();
    onStoreChange = () => {
      // this.setState(this.props.store.getState());
      // this.forceUpdate();
      this.setState(this.usedState());
    };

    componentDidMount()
    {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }
    componentWillUnmount()
    {
      this.context.store.unsubscribe(this.subscriptionId);
    }
    componentWillUpdate() {
      console.log('NAME', Component.name);
    }
    // shouldComponentUpdate() {
    //   return false;
    // }

    render() {
      return <Component
        {...this.props}
        {...this.usedState()}
        store={this.context.store}
      />;
    }
  };
});

export default storeProvider;