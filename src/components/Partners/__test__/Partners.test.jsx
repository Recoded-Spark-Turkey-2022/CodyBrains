import renderer from 'react-test-renderer';
import Partners from '../Partners';

// Mocking Swiper and SwiperSlide to avoid errors in tests

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));

jest.mock('swiper/react', () => ({
  Swiper: 'Swiper',
  SwiperSlide: 'SwiperSlide',
}));

jest.mock('swiper', () => ({
  Pagination: 'Pagination',
}));

describe('Partners', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Partners />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
