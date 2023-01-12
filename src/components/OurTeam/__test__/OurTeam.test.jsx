import React from 'react';
import renderer from 'react-test-renderer';
import OurTeam from '../OurTeam';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));
describe('OurTeam', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<OurTeam />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
