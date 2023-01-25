import renderer from 'react-test-renderer';
import SingleBlogPage from '../SingleBlogPage';

jest.mock('react-icons/ai', () => ({
  ...jest.requireActual('react-icons/ai'),
  AiOutlineShareAlt: () => <div>AiOutlineShareAlt</div>,
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: 'Link',
}));

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'),
  collection: () => jest.fn(),
  getDocs: () => jest.fn(),
  query: () => jest.fn(),
  where: () => jest.fn(),
}));

jest.mock('sweetalert2', () => ({
  ...jest.requireActual('sweetalert2'),
  Swal: () => jest.fn(),
}));

it('renders correctly', () => {
  const tree = renderer.create(<SingleBlogPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
