import React from 'react';
import renderer from 'react-test-renderer';
import OurStory from '../OurStory';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));
describe('OurStory', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<OurStory />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});