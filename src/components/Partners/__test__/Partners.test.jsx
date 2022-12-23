import React from 'react';
import { render } from '@testing-library/react';
import Partners from '../Partners';

// Mocking Swiper and SwiperSlide to avoid errors in tests

jest.mock('swiper/react', () => ({
  Swiper: 'Swiper',
  SwiperSlide: 'SwiperSlide',
}));

// Mocking Pagination module
jest.mock('swiper', () => ({
  Pagination: 'Pagination',
}));

// Mocking images because jest can't handle images

jest.mock('../../../assets/companies/recoded.png', () => 'recoded');
jest.mock('../../../assets/companies/spark.png', () => 'spark');
jest.mock('../../../assets/companies/flatiron.png', () => 'flatiron');
jest.mock('../../../assets/companies/children.png', () => 'children');
jest.mock('../../../assets/companies/unhcr.png', () => 'unhcr');
jest.mock('../../../assets/companies/amnesty.png', () => 'amnesty');
jest.mock('../../../assets/companies/oxfam.png', () => 'oxfam');
jest.mock('../../../assets/companies/giz.png', () => 'giz');
jest.mock('../../../assets/companies/unicef.png', () => 'unicef');

/* //describe means that we are creating a test suite and the first argument is the name of the suite
//it means that we are creating a test case and the first argument is the name of the test case
//expect is the assertion library that we are using to test our code
//toMatchSnapshot is a method that we are using to compare the snapshot of the component with the current snapshot
//if the snapshot is the same as the current snapshot then the test will pass
//if the snapshot is different from the current snapshot then the test will fail and the snapshot will be updated */

describe('Partners', () => {
  it('renders correctly', () => {
    const { container } = render(<Partners />);
    expect(container).toMatchSnapshot();
  });
});
