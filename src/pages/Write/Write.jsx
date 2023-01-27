import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { useCreateBlogPost } from '../../hooks/useCreateBlogPost';

const Write = () => {

  const { t } = useTranslation();

  const user = useSelector(selectUser);
  const [content, setContent] = useState('');
  const {
    title,
    setTitle,
    createBlogPost,
    loading,
    handleFileChange,
    setFile,
    headerPhoto,
  } = useCreateBlogPost();

  const handleChange = (value) => {
    setContent(value);
  };

  const checkUser = async () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to login to write a blog post',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      checkUser();
    } else {
      await createBlogPost(content);
    }
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      ['link'],
      ['clean'],
    ],
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 md:gap-5  items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
          {t('Write_Your_Blog_Post')}
      </h1>

      <div className="w-full min-h-screen gap-8 md:gap-5  grid md:grid-cols-2 mb-16 grid-cols-1 ">
        <div className=" flex-1 h-full flex flex-col gap-2 p-4">
          <form
            onSubmit={handleSubmit}
            className=" h-full flex flex-col gap-2 "
          >
            <input
              type="text"
              placeholder="Title"
              className="w-full h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="file" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-refubookBlue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6m6-6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6z"
                  />
                </svg>
                <span className="text-refubookBlue">
                  {t('Upload_Your_Header_Image')}
                </span>

                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={(e) => {
                    handleFileChange(e);
                    setFile(e.target.files[0]);
                  }}
                  accept="image/*"
                />
              </label>
            </div>

            <ReactQuill
              theme="snow"
              modules={modules}
              value={content}
              onChange={handleChange}
              placeholder="Write something..."
              className=" h-full focus:outline-none focus:ring-2 focus:ring-refubookBlue focus:border-transparent"
            />
            <button
              disabled={loading}
              type="submit"
              className="z-10 flex items-center justify-center rounded-md py-4 px-8 mx-auto h-10 mt-2 bg-refubookBlue text-refubookWhite focus:outline-none focus:ring-2 focus:ring-refubookBlue focus:border-transparent"
            >
              {t('Submit')}
            </button>
          </form>
        </div>
        <div className="flex flex-col flex-1 p-4 gap-3 h-full">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl text-refubookWhite font-medium w-full bg-refubookBlue text-center p-2 border-refubookGray rounded">
              Preview
            </h1>
            {headerPhoto && (
              <img
                src={headerPhoto}
                alt=""
                className="w-full h-40 object-contain"
              />
            )}
          </div>
          <div className="border-2 border-refubookGray p-2 h-full ">
            <h1 className="text-2xl text-center font-medium">{title}</h1>

            <div className="ql-editor ">
              {parse(content, {
                replace: (domNode) => {
                  if (domNode.name === 'img') {
                    domNode.attribs.class += ' w-full object-cover';
                  } else if (domNode.name === 'p') {
                    domNode.attribs.class += ' text-sm';
                  } else if (domNode.name === 'h1') {
                    domNode.attribs.class += ' text-2xl font-semibold';
                  } else if (domNode.name === 'h2') {
                    domNode.attribs.class += ' text-xl font-medium';
                  }

                  return domNode;
                },
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
