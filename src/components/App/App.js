import React, { Component } from 'react';
// import './App.css';
import data from '../../data.json';
import ShoppingList from '../ShoppingList/ShoppingList';
import NavBarContainer from '../../containers/NavBarContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.items
    };
  }

  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <ShoppingList items={this.state.items} />
      </div>
    );
  }
}

export default App;
