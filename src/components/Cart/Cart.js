import React, { Component } from 'react';
//import './Cart.css';
// import styled from 'styled-components';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return <div className="Cart" />;
  }

  state = {};
}

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
