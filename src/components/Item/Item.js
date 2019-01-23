import React, { Component } from 'react';
// import { increment } from '../../actionCreators';
//import './Item.css';
// import styled from 'styled-components';

class Item extends Component {
  handleIncrement = () => {
    console.log(`Props in item`, this.props);
    this.props.increment(this.props);
  };

  handleDecrement = () => {
    this.props.decrement(this.props);
  };

  render() {
    return (
      <div
        className="card m-3"
        style={{ width: '18rem', display: 'inline-block' }}
      >
        <img
          src={this.props.image}
          className="card-img-top"
          alt="..."
          style={{ width: '250px', height: '250px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">${this.props.price}</p>
          <span style={{ fontSize: '2em', color: 'green' }}>
            <i onClick={this.handleIncrement} className="fas fa-cart-plus" />
          </span>
          <span style={{ fontSize: '2em', color: 'red' }}>
            <i
              onClick={this.handleDecrement}
              className="fas fa-cart-arrow-down"
            />
          </span>
        </div>
      </div>
    );
  }
}

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
