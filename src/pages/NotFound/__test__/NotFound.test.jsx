import renderer from 'react-test-renderer';
import NotFound from '../NotFound';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));

describe('NotFound', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
