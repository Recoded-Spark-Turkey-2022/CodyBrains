import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../Contact';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));
describe('Contact', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
