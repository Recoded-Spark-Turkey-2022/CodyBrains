import { useState } from 'react';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';
import 'react-quill/dist/quill.snow.css';
import { useCreateBlogPost } from '../../hooks/useCreateBlogPost';

const Write = () => {
  const [content, setContent] = useState('');
  const { title, setTitle, createBlogPost } = useCreateBlogPost();
  /*  const [events, setEvents] = useState([]); */

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlogPost(content);
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
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  /* const onEditorChange = (value, delta, source, editor) => {
    setContent(editor.getHTML());
    console.log(editor.getContents());
    setEvents([
      ...events,
      {
        source,
        editor,
        value,
        delta,
      },
    ]);

    console.log(events);
  };
   */

  return (
    <div className="w-full min-h-screen flex gap-5  divide-refubookGray">
      <div className=" flex-1 h-full flex flex-col gap-2 p-4">
        <form onSubmit={handleSubmit} className=" h-full flex flex-col gap-2 ">
          <input
            type="text"
            placeholder="Title"
            className="w-full h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill
            theme="snow"
            modules={modules}
            value={content}
            onChange={handleChange}
            placeholder="Write something..."
            className=" h-full border space-y-4  focus:outline-none focus:ring-2 focus:ring-refubookBlue focus:border-transparent"
          />
          <button
            type="submit"
            className=" flex items-center justify-center rounded-md py-4 px-8 mx-auto h-10 mt-2 bg-refubookBlue text-refubookWhite focus:outline-none focus:ring-2 focus:ring-refubookBlue focus:border-transparent"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col flex-1 p-4 gap-3 h-full">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl text-refubookWhite font-medium w-full bg-refubookBlue text-center p-2 border-refubookGray rounded">
            Preview
          </h1>
        </div>
        <div className="border-2 border-refubookGray p-4 ">
          <h1 className="text-2xl text-center font-medium">{title}</h1>

          {parse(content, {
            replace: (domNode) => {
              if (domNode.name === 'img') {
                domNode.attribs.class = 'w-40 h-40 rounded-lg';
              } else if (domNode.name === 'p') {
                domNode.attribs.class = 'text-sm';
              } else if (domNode.name === 'h1') {
                domNode.attribs.class = 'text-2xl font-semibold';
              } else if (domNode.name === 'h2') {
                domNode.attribs.class = 'text-xl font-medium';
              }

              return domNode;
            },
          })}
        </div>
      </div>
    </div>
  );
};

export default Write;
