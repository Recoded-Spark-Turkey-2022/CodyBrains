import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
  }),
}));

jest.mock('react-redux', () => ({
  useSelector: () => ({
    user: {
      name: 'test',
    },
  }),
  useDispatch: () => jest.fn(),
}));

describe('Navbar', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
