import React, { Component } from 'react';
import ItemContainer from '../../containers/ItemContainer';
//import './ShoppingList.css';

class ShoppingList extends Component {
  render() {
    return (
      <div className="ShoppingList">
        {this.props.items.map(item => (
          <ItemContainer
            id={item.id}
            price={item.price}
            name={item.name}
            image={item.image_url}
          />
        ))}
      </div>
    );
  }
}

ShoppingList.propTypes = {};

ShoppingList.defaultProps = {};

export default ShoppingList;
