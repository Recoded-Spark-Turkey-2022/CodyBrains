import React from 'react';
import { render } from '@testing-library/react';
import Testimonials from '../Testimonials';

// Mocking Swiper and SwiperSlide to avoid errors in tests

const mockedSwiper = jest.fn();
const mockedSwiperSlide = jest.fn();
const mockedPagination = jest.fn();

jest.mock('swiper/react', () => ({
  ...jest.requireActual('swiper/react'),
  Swiper: mockedSwiper,
  SwiperSlide: mockedSwiperSlide,
}));

jest.mock('swiper', () => ({
  ...jest.requireActual('swiper'),
  Pagination: mockedPagination,
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
    const { container } = render(<Testimonials />);
    expect(container).toMatchSnapshot();
  });
  it('renders testimonialsData correctly', () => {
    const { getByText } = render(<Testimonials />);
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Jane Doe')).toBeInTheDocument();
  });
});
