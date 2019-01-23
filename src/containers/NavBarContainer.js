import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';

class ItemContainer extends Component {
  render() {
    return <NavBar {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    total: state.total
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(ItemContainer);
