import renderer from 'react-test-renderer';
import Blog from '../Blog';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'),
  collection: () => jest.fn(),
  getDocs: () => jest.fn(),
}));

const mockedTimestamp = jest.fn(() => ({
  toDate: () => new Date('2020-01-01'),
}));

jest.mock('html-react-parser', () => jest.fn());

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Blog
        posts={[
          {
            id: '1',
            title: 'title',
            content: 'content',
            date: mockedTimestamp(),
          },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
