import renderer from 'react-test-renderer';
import Blog from '../Blog';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'),
  collection: () => jest.fn(),
  getDocs: () => jest.fn(),
}));

jest.mock('html-react-parser', () => jest.fn());

it('renders correctly', () => {
  const tree = renderer.create(<Blog />).toJSON();
  expect(tree).toMatchSnapshot();
});
