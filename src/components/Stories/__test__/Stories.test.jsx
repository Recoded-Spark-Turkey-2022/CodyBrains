import React from 'react';
import renderer from 'react-test-renderer';
import Stories from '../Stories';

describe('Stories', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Stories />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
