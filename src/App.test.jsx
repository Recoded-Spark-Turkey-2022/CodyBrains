import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Routes: jest.fn(({ children }) => <div>{children}</div>),
  Route: jest.fn(({ children }) => <div>{children}</div>),
  Link: jest.fn(({ children }) => <a href="/testpath">{children}</a>),

  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
  }),
}));

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container).toBeTruthy();
  });
});
