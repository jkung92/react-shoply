import React from 'react';
import rootReducer from './rootReducer';
import { increment, decrement } from './actionCreators';
import { INCREMENT, DECREMENT } from './actionTypes';

// Does this need typical Comp tests or something different?
it('properly updates store with increment', function() {
  let state = { items: [{ id: 1, count: 0 }], total: 0 };
  let result = rootReducer(state, {
    type: INCREMENT,
    id: 1
  });
  expect(result.items[0].count).toBe(1);
  expect(result.total).toBe(1);
});

it('properly updates store with decrement', function() {
  let state = { items: [{ id: 2, count: 3 }], total: 3 };
  let result = rootReducer(state, {
    type: DECREMENT,
    id: 2
  });
  expect(result.items[0].count).toBe(2);
  expect(result.total).toBe(2);
});

it('does not decrement count below 0', function() {
  let state = { items: [{ id: 2, count: 0 }], total: 0 };
  let result = rootReducer(state, {
    type: DECREMENT,
    id: 2
  });
  expect(result.items[0].count).toBe(0);
  expect(result.total).toBe(0);
});
