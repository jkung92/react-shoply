import { INCREMENT, DECREMENT } from './actionTypes';

const INITIAL_STATE = {
  items: [],
  total: 0
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT: {
      // if the item is in the cart
      if (state.items.find(item => action.id === item.id)) {
        // map over items and increment that item
        return {
          ...state,
          items: state.items.map(item => {
            if (item.id === action.id) {
              return { ...item, count: item.count + 1 };
            }
            return item;
          }),
          total: state.total + 1
        };
      } else {
        // no item? add it to the cart and add a count property to it
        return {
          ...state,
          items: [...state.items, { id: action.id, count: 1 }],
          total: state.total + 1
        };
      }
    }

    case DECREMENT: {
      console.log(`Action ID:`, action.id, `-----State------`, state);
      // if the item is in the cart
      if (state.items.find(item => action.id === item.id && item.count > 1)) {
        // map over items and increment that item
        return {
          ...state,
          items: state.items.map(item => {
            if (item.id === action.id) {
              return { ...item, count: item.count - 1 };
            }
            return item;
          }),
          total: state.total - 1
        };
      } else if (
        state.items.find(item => action.id === item.id && item.count === 1)
      ) {
        return {
          ...state,
          items: state.items.filter(item => {
            return item.id !== action.id;
          }),
          total: state.total - 1
        };
      } else {
        // no item? add it to the cart and add a count property to it
        return {
          ...state
        };
      }
    }

    default:
      return state;
  }
}

export default rootReducer;
