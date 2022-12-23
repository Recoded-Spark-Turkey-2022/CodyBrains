import React from 'react';
import { render } from '@testing-library/react';
import Features from '../Features';
import Feature from '../Feature';

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
    const { container } = render(<Features />);
    expect(container).toMatchSnapshot();
  });
  it('renders Feature component with props passed', () => {
    const { feature } = render(
      <Feature key={1} item={{ title: 'Test Title', text: 'Test Text' }} />
    );
    expect(feature).toMatchSnapshot();
  });
});
