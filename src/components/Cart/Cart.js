import React, { Component } from 'react';
//import './Cart.css';
// import styled from 'styled-components';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        {this.props.items}

        {/* <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">count</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }
}

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
