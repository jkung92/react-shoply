import { INCREMENT, DECREMENT } from './actionTypes';

export function increment(item) {
  return {
    type: INCREMENT,
    id: item.id,
    name: item.name,
    image: item.image_url
  };
}

export function decrement(item) {
  return {
    type: DECREMENT,
    id: item.id,
    name: item.name,
    image: item.image_url
  };
}
