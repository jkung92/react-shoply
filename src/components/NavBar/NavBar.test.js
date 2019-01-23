import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', function() {
  shallow(<NavBar />);
});

it('matches snapshot', function() {
  const wrapper = shallow(<NavBar />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
