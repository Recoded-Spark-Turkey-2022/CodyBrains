import React from 'react';
import renderer from 'react-test-renderer';
import Hero from '../Hero';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));

jest.mock('react-redux', () => ({
  useSelector: () => ({
    user: {
      name: 'test',
    },
  }),
  useDispatch: () => jest.fn(),
}));

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
