import renderer from 'react-test-renderer';
import RegisterForm from '../RegisterForm';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: () => <div>Link</div>,
}));

describe('RegisterForm', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<RegisterForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
