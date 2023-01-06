import React from 'react';
import renderer from 'react-test-renderer';
import Blog from '../Blog';

describe('Blog', () => {
  it('renders correctly with props passed', () => {
    const tree = renderer
      .create(<Blog key={1} title="Test Title" text="Test Text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
