import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actionCreators';
import Cart from '../components/Cart/Cart';
// import { INCREMENT } from '../actionTypes';

class CartContainer extends Component {
  render() {
    return <Cart {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: id => dispatch(increment(id)),
    decrement: id => dispatch(decrement(id))
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectedComponent(CartContainer);
