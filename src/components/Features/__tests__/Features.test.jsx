import renderer from 'react-test-renderer';
import Features from '../Features';

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

describe('Features', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Features />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
