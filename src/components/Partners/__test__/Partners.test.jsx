import React from 'react';
import { render } from '@testing-library/react';
import Partners from '../Partners';

jest.mock('swiper/react', () => ({
  Swiper: 'Swiper',
  SwiperSlide: 'SwiperSlide',
}));

jest.mock('swiper', () => ({
  Pagination: 'Pagination',
}));

jest.mock('../../../assets/companies/recoded.png', () => 'recoded');
jest.mock('../../../assets/companies/spark.png', () => 'spark');
jest.mock('../../../assets/companies/flatiron.png', () => 'flatiron');
jest.mock('../../../assets/companies/children.png', () => 'children');
jest.mock('../../../assets/companies/unhcr.png', () => 'unhcr');
jest.mock('../../../assets/companies/amnesty.png', () => 'amnesty');
jest.mock('../../../assets/companies/oxfam.png', () => 'oxfam');
jest.mock('../../../assets/companies/giz.png', () => 'giz');
jest.mock('../../../assets/companies/unicef.png', () => 'unicef');

describe('Partners', () => {
  it('renders correctly', () => {
    const { container } = render(<Partners />);
    expect(container).toMatchSnapshot();
  });
});
