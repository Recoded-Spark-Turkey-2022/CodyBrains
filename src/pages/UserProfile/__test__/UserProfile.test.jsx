import renderer from 'react-test-renderer';
import UserProfile from '../UserProfile';
import { UserBlogPosts, EditProfile } from '../../../components';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => jest.fn(),
  useDispatch: () => jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
  }),
}));

const setIsEditing = jest.fn();

const user = {
  displayName: 'test',
  photoURL: 'test',
  uid: 'test',
};

describe('UserProfile', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <UserProfile>
          <UserBlogPosts user={user} />
          <EditProfile setIsEditing={setIsEditing} />
        </UserProfile>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
