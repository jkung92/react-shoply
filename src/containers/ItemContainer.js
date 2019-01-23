import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actionCreators';
import Item from '../components/Item/Item';
// import { INCREMENT } from '../actionTypes';

class ItemContainer extends Component {
  render() {
    return <Item {...this.props} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: id => dispatch(increment(id)),
    // increment: function(id) {
    //   rootReducer(oldState, { type: 'INCREMENT', id: id })
    // }
    decrement: id => dispatch(decrement(id))
  };
}

const connectedComponent = connect(
  null,
  mapDispatchToProps
);

export default connectedComponent(ItemContainer);
