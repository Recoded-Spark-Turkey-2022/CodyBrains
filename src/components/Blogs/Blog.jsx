import React from 'react';

const stylingObject = {
    blogTitle: {
        height: "40px",
    },
    p: {
        height: "120px",
    }
};

const Blog = ({item}) => {
    return (
        <div
            className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800">
            <a href="!#">
                <img className="rounded-t-lg" src={item.cover} alt={item.title}/>
            </a>
            <div className="p-5">
                <a href="!#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                        style={stylingObject.blogTitle}>
                        {item.title.substring(0, 30)}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={stylingObject.p}>
                    {item.text.substring(0, 179)}
                </p>


                <div className="flex items-center space-x-4">
                    <img className="w-10 h-10 rounded-full" src={item.avatar} alt={item.title}/>
                    <div className="font-medium dark:text-white">
                        <div>{item.userName}</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;
