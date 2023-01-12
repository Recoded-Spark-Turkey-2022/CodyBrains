import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../Contact';


jest.mock();

describe('Contact', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
