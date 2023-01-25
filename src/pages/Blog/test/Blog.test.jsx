import renderer from 'react-test-renderer';
import Blog from '../Blog';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));

it('renders correctly', () => {
  const tree = renderer.create(<Blog />).toJSON();
  expect(tree).toMatchSnapshot();
});
