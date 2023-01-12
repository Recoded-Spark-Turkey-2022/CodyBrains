import renderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import Providers from '../Providers';

jest.mock('react-icons/fa', () => ({
  ...jest.requireActual('react-icons/fa'),
  FaFacebookF: () => jest.fn(),
  FaGoogle: () => jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  ...jest.requireActual('firebase/auth'),
  signInWithPopup: () => jest.fn(),
}));

jest.mock('sweetalert2', () => ({
  ...jest.requireActual('sweetalert2'),
  fire: () => jest.fn(),
}));

jest.mock('../../../services/firebase.config', () => ({
  ...jest.requireActual('../../../services/firebase.config'),
  facebookProvider: () => jest.fn(),
  googleProvider: () => jest.fn(),
}));

jest.mock('../../../features/userSlice', () => ({
  ...jest.requireActual('../../../features/userSlice'),
  login: () => jest.fn(),
}));

jest.mock('react-icons/fa', () => ({
  ...jest.requireActual('react-icons/fa'),
  FaFacebookF: () => <div>FaFacebookF</div>,
  FaGoogle: () => <div>FaGoogle</div>,
}));

describe('Providers', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Providers />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly', () => {
    render(<Providers />);
    const google = screen.getByTestId('google');
    const facebook = screen.getByTestId('facebook');
    fireEvent.click(google);
    fireEvent.click(facebook);
  });
});
