import React from 'react';
import renderer from 'react-test-renderer';
import Testimonials from '../Testimonials';

jest.mock('swiper/react', () => ({
  Swiper: 'Swiper',
  SwiperSlide: 'SwiperSlide',
}));

jest.mock('swiper', () => ({
  Pagination: 'Pagination',
}));

// Mocking testimonialsData to avoid errors in tests and to make sure the snapshot is consistent
jest.mock('../../../data/testimonialsData', () => [
  {
    id: 1,
    name: 'John Doe',
    country: 'United States',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl euismod nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl euismod nisl.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    country: 'United Kingdom',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl euismod nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl euismod nisl.',
  },
]);

describe('Testimonials', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Testimonials />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
