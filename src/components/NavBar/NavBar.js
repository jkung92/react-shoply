import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import './NavBar.css';
// import styled from 'styled-components';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'dodgerblue'
    };
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink
          className="navbar-brand"
          exact
          to="/"
          activeStyle={activeStyle}
        >
          Shoply
        </NavLink>
        <div className="navbar" id="navbarNav">
          <span className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                exact
                to={`/jobs`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                <p>Cart : {this.props.total}</p>
              </NavLink>
            </li>
          </span>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
