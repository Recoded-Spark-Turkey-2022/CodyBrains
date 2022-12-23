import React from 'react';
import { render } from '@testing-library/react';
/* This line imports the render function from the @testing-library/react library, which is used to render React */
import Features from '../Features';
import Feature from '../Feature';

/*

jest.mock('react-router-dom', () => ({ Link: 'Link', })); -
jest.mock('swiper/react', () => ({ Swiper: 'Swiper', SwiperSlide: 'SwiperSlide', })); - 
jest.mock('swiper', () => ({ Pagination: 'Pagination', })); - 
describe('Features', () => { ... }); - 
it('renders correctly', () => { ... }); - This block creates a test case using Jest's it function. The test case
const { container } = render(<Features />); - This line renders the Features component and destructures the container element from the returned object.
expect(container).toMatchSnapshot(); - Thisß line uses Jest's toMatchSnapshot function to create a snapshot of the rendered element and compare it to a previously saved snapshot. If the snapshots do not match, the test will fail.
it('renders Feature component with props passed', () => { ... }); - This block creates another test case using Jest's it function. The test case checks that the Feature component renders correctly when passed a mock item prop by taking a snapshot of the rendered element and comparing it to a previously saved snapshot.
const { feature } = render(<Feature key={1} item={{ title: 'Test Title', text: 'Test Text' }} />); - This line renders the Feature component and passes in a mock item prop. The feature element is destructured from the returned
*/

/*  This line mocks the react-router-dom library using the jest.mock function. 
This is necessary because the Features and Feature components are dependent on this library, but we don't want to actually include it in the test. 
Instead, we provide a fake implementation of the Link component, which allows us to run the test without running into errors. */
jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));

/* This line mocks the swiper/react library in the same way as the previous line. 
We provide fake implementations of the Swiper and SwiperSlide components, which allows us to run the test without running into errors. */
jest.mock('swiper/react', () => ({
  Swiper: 'Swiper',
  SwiperSlide: 'SwiperSlide',
}));

jest.mock('swiper', () => ({
  Pagination: 'Pagination',
}));

describe('Features', () => {
  /*  This block creates a test suite for the Features component using Jest's describe function. 
All of the test cases within this block will be run as part of the same test suite. */
  it('renders correctly', () => {
    /* checks that the Features component renders correctly by taking a snapshot of the rendered element and comparing it to a previously saved snapshot. */
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
