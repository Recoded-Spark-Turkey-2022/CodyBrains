import renderer from 'react-test-renderer';
import UserBlogPosts from '../UserBlogPosts';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
  useNavigate: () => jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: () => ({
    user: {
      name: 'test',
    },
  }),
  useDispatch: () => jest.fn(),
}));

describe('UserBlogPosts', () => {
  it('should renders with user props correctly', () => {
    const tree = renderer
      .create(<UserBlogPosts user={{ name: 'test' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
