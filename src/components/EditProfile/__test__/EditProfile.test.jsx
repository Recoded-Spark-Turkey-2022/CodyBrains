import renderer from 'react-test-renderer';
import EditProfile from '../EditProfile';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => jest.fn(),
  useDispatch: () => jest.fn(),
}));

jest.mock('../../../hooks/useUpdateProfile', () => ({
  __esModule: true,
  default: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    onSubmit: jest.fn(),
    errors: jest.fn(),
    reset: jest.fn(),
  }),
}));

jest.mock('../../../hooks/useAvatarUpload', () => ({
  __esModule: true,
  default: () => ({
    file: jest.fn(),
    handleFileChange: jest.fn(),
    photoURL: jest.fn(),
    loading: jest.fn(),
    percentage: jest.fn(),
  }),
}));

// eslint-disable-next-line no-console
const setIsEditing = jest.fn(() => console.log('setIsEditing called'));

describe('EditProfile component', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<EditProfile setIsEditing={setIsEditing} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
