import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/firebase.config';

const UserBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const getBlogPosts = async () => {
      const postsRef = collection(db, 'users', user.uid, 'blogPosts');
      const postsSnap = await getDocs(postsRef);
      const posts = postsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogPosts(posts);
    };
    getBlogPosts();
  }, [user.uid]);

  return (
    <div className="w-full flex flex-col gap-2">
      {blogPosts.length ? (
        <Swiper
          modules={[Grid, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          grid={{
            rows: 2,
            fill: 'row',
          }}
        >
          {blogPosts.map((blogPost) => (
            <SwiperSlide key={blogPost.id}>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-xl font-bold">{blogPost.title}</h1>
                <p className="text-gray-500">{blogPost.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h1 className="text-2xl font-bold text-center">No blog posts yet</h1>
      )}
    </div>
  );
};

export default UserBlogPosts;
