import { render } from '@testing-library/react';
import Write from '../Write';

jest.mock('react-redux', () => ({
  useSelector: () => ({
    user: {
      name: 'test',
    },
  }),
  useDispatch: () => jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  Link: 'Link',
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
  }),
}));

jest.mock('html-react-parser', () => jest.fn());

jest.mock('../../../hooks/useCreateBlogPost', () => ({
  useCreateBlogPost: () => ({
    createBlogPost: jest.fn(),
  }),
}));

describe('Write', () => {
  it('should render correctly', () => {
    const { container } = render(<Write />);
    expect(container).toMatchSnapshot();
  });
});
