import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ShoppingList from './ShoppingList';

it('renders without crashing', function() {
  let items = [
    {
      id: 1,
      name: 'tv',
      price: 219.99,
      image_url:
        'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
    }
  ];
  shallow(<ShoppingList items={items} />);
});

it('matches snapshot', function() {
  let items = [
    {
      id: 1,
      name: 'tv',
      price: 219.99,
      image_url:
        'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
    }
  ];
  const wrapper = shallow(<ShoppingList items={items} />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
