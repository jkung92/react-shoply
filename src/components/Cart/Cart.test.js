import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cart from './Cart';

it('renders without crashing', function() {
  shallow(<Cart />);
});

it('matches snapshot', function() {
  const wrapper = shallow(<Cart />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
