import React, { Component } from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Menu from './FoodMenu';
import Snack from './FoodItem';
import AddItemForm from './AddItemForm';
import NotFound from './NotFound';
import ShoppingList from './components/ShoppingList/ShoppingList';
import CartContainer from './containers/CartContainer';

class Routes extends Component {
  render() {
    let { snacks, drinks, addSnack, addDrink } = this.props;

    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => <ShoppingList />} />

          <Route
            exact
            path="/cart"
            render={() => <CartContainer snacks={snacks} title="Snacks" />}
          />

          {/* Redirects if no route exists */}
          <Route render={() => <NotFound />} />
        </Switch>
      </main>
    );
  }
}

export default Routes;
