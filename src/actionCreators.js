import { INCREMENT, DECREMENT } from './actionTypes';

export function increment(id) {
  return {
    type: INCREMENT,
    id: id
  };
}

export function decrement(id) {
  return {
    type: DECREMENT,
    id: id
  };
}
