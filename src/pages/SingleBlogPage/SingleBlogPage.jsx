/* eslint-disable no-unused-vars */
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import parse from 'html-react-parser';
import { db } from '../../services/firebase.config';
import blogsData from '../../data/blogsData';

const SingleBlogPage = () => {
  const [readAlsoBlogs, setReadAlsoBlogs] = useState([]);
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllBlogPosts(blogs);
      setLoading(false);
    };
    getBlogs();
  }, []);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, 'blogs'), where('id', '==', id));
    getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      setBlogPosts(data);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    const combinedBlogs = [...blogsData, ...allBlogPosts];
    const randomTwoBlogs = combinedBlogs
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    setReadAlsoBlogs(randomTwoBlogs);
  }, [id]);

  const singleStaticBlog = blogsData.filter((blog) => blog.id === Number(id));

  const singleFirebaseBlog = blogPosts.filter((blog) => blog.id === id);
  const defaultImageUrl =
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  return (
    <div className="flex flex-col md:flex-row justify-between container mx-auto ">
      {singleFirebaseBlog &&
        singleFirebaseBlog.map((blog) => (
          <div
            className=" flex flex-col gap-5 md:max-w-3xl mx-auto max-w-xs items-center justify-center "
            key={blog.id}
          >
            <h1 className="text-4xl font-bold">{blog.title}</h1>
            <img
              src={blog.headerPhoto}
              alt={blog.title}
              className=" max-w-xl object-contain"
            />

            <div className="ql-editor container ">
              {parse(blog.content, {
                replace: (domNode) => {
                  if (domNode.name === 'img') {
                    domNode.attribs.class += ' hidden';
                  } else if (domNode.name === 'p truncate') {
                    domNode.attribs.class += ' text-sm ';
                  } else if (domNode.name === 'h1') {
                    domNode.attribs.class += ' text-2xl font-semibold';
                  } else if (domNode.name === 'h2') {
                    domNode.attribs.class += ' text-xl font-medium';
                  } else if (domNode.name === 'pre') {
                    domNode.name = 'code';
                    domNode.attribs.class +=
                      ' bg-refubookGray p-2 rounded text-justify';
                  }

                  return domNode;
                },
              })}
            </div>
          </div>
        ))}
      {singleStaticBlog &&
        singleStaticBlog.length > 0 &&
        singleStaticBlog.map((blog) => (
          <div
            className="flex flex-col max-w-3xl mx-auto  p-4 gap-10"
            key={blog.id}
          >
            <h1 className="text-4xl font-bold">{blog.title}</h1>
            <img
              src={blog.headerPhoto}
              alt={blog.title}
              className="object-cover"
            />

            <p className="text-sm  max-w-3xl ">{blog.text}</p>
          </div>
        ))}
      <div className=" flex flex-col max-w-md gap-4 p-4 ">
        <h1 className="text-4xl font-bold text-center">Read Also</h1>
        <div className="flex flex-col  gap-4 ">
          {readAlsoBlogs.map((item) => (
            <div
              key={item.id}
              className=" border-2 border-refubookGray rounded-lg p-2 shadow-sm  flex flex-col justify-between "
            >
              <div className=" flex flex-col  gap-5">
                <img
                  className="h-40  object-cover rounded"
                  src={item.headerPhoto || defaultImageUrl}
                  alt=""
                />
                <p className="text-sm font-medium text-refubookActiveNav">
                  {new Date(item.date.seconds * 1000).toLocaleDateString()}
                </p>

                <p className="md:text-md  text-lg text-center mb-3 border-b font-semibold text-refubookBlack">
                  {item.title}
                </p>

                {item.content && (
                  <div className="ql-editor p-0 max-h-36 overflow-hidden truncate">
                    {parse(item.content, {
                      replace: (domNode) => {
                        if (domNode.name === 'img') {
                          domNode.attribs.class += ' hidden';
                        } else if (domNode.name === 'p truncate') {
                          domNode.attribs.class += ' text-sm ';
                        } else if (domNode.name === 'h1') {
                          domNode.attribs.class += ' text-2xl font-semibold';
                        } else if (domNode.name === 'h2') {
                          domNode.attribs.class += ' text-xl font-medium';
                        }

                        return domNode;
                      },
                    })}
                  </div>
                )}

                {item.text && (
                  <div className="overflow-hidden ">
                    <p className="text-sm truncate ">
                      {item.text.slice(0, 200)}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{item?.author?.name}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={item.author?.photo}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-refubookLightBlack">
                      {item?.author.name}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/blog/${item.id}`}
                  className=" mt-2 bg-refubookActiveNav w-fit text-refubookWhite px-4 py-2 rounded-md text-sm font-medium hover:bg-refubookActiveNavHover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  <span className="sr-only">Read more</span>
                  <p className="text-sm font-medium text-refubookWhite">
                    Read more
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
