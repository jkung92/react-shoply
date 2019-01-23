import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Item from './Item';

it('renders without crashing', function() {
  shallow(<Item />);
});

it('matches snapshot', function() {
  const wrapper = shallow(<Item />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
