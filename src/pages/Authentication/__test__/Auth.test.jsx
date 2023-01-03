import renderer from 'react-test-renderer';
import Auth from '../Auth';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/register',
  }),
  useNavigate: () => jest.fn(),
  Link: 'Link',
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

describe('Auth', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Auth />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
