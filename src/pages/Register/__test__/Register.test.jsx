import { render } from '@testing-library/react';
import Register from '../Register';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  Link: () => <div>Link</div>,
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    formState: { errors: {} },
  }),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

describe('Register', () => {
  it('renders correctly', () => {
    const { container } = render(<Register />);
    expect(container).toMatchSnapshot();
  });
});
