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

describe('Providers', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Providers />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call handleLoginWithGoogle when click on google button', () => {
    render(<Providers />);
    const googleButton = screen.getByTestId('google');
    fireEvent.click(googleButton);
  });

  it('should call handleLoginWithFacebook when click on facebook button', () => {
    render(<Providers />);
    const facebookButton = screen.getByTestId('facebook');
    fireEvent.click(facebookButton);
  });
});
