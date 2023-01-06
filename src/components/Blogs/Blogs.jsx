import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import blogsData from "../../data/blogsData";
import Blog from "./Blog";

// The Features component is a functional component that displays information about RefuBook.
const Blogs = () => {
    let isSmallCard = true
    return (
        // The component consists of a div with a blue background and two main sections: a section with text and a button, and a section with an illustration and a list of features.
        <>
            <div className="container mx-auto px-28">
                <Swiper
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="w-full"
                    loop
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                    }}
                >
                    {blogsData.map((item) => {
                        isSmallCard = false;
                        return (
                            <SwiperSlide
                                key={item.id}
                                className="flex items-center justify-center py-14"
                            >
                                <Blog key={item.id} item={item} isSmallCard={isSmallCard}/>

                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className="container mx-auto px-44">
                <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4">
                    {blogsData.map((item) => {
                        isSmallCard = true;
                        return (
                            <Blog key={item.id} item={item} isSmallCard={isSmallCard}/>
                        )
                    })};
                </div>
            </div>
        </>

    );
};

export default Blogs;
