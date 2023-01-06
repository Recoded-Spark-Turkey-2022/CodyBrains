import React from 'react';
import {render} from '@testing-library/react';
/* This line imports the render function from the @testing-library/react library, which is used to render React */
import Blogs from '../Blogs';
import Blog from '../Blog';

/*  This line mocks the react-router-dom library using the jest.mock function. 
This is necessary because the Blogs and Blog components are dependent on this library, but we don't want to actually include it in the test. 
Instead, we provide a fake implementation of the Link component, which allows us to run the test without running into errors. */
jest.mock('react-router-dom', () => ({
    Link: 'Link',
}));

/* This line mocks the swiper/react library in the same way as the previous line. 
We provide fake implementations of the Swiper and SwiperSlide components, which allows us to run the test without running into errors. */
/*jest.mock('swiper/react', () => ({
    Swiper: 'Swiper',
    SwiperSlide: 'SwiperSlide',
}));

jest.mock('swiper', () => ({
    Pagination: 'Pagination',
}));*/

describe('Blogs', () => {
    /*  This block creates a test suite for the Blogs component using Jest's describe function.
  All of the test cases within this block will be run as part of the same test suite. */
    it('renders correctly', () => {
        /* checks that the Blogs component renders correctly by taking a snapshot of the rendered element and comparing it to a previously saved snapshot. */
        const {container} = render(<Blogs/>);
        expect(container).toMatchSnapshot();
    });
    it('renders Blog component with props passed', () => {
        const {blog} = render(
            <Blog key={1} item={{title: 'Test Title', text: 'Test Text'}}/>
        );
        expect(blog).toMatchSnapshot();
    });
});
