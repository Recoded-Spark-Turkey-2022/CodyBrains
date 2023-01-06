import React from 'react';

const Blog = ({item,isSmallCard}) => {
    return (
        <div
            className="max-w-sm bg-white shadow-md
             dark:bg-gray-800 mx-3 mt-4">
            <a href="!#">
                <img className="" src={item.cover} alt={item.title}/>
            </a>
            <div className="p-5">
                <a href="!#">
                    <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                         {isSmallCard ? item.title.substring(0, 15) : item.title.substring(0, 20)}
                    </h6>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.text.substring(0, 50)}
                </p>


                <div className="flex items-center space-x-4">
                    <img className="w-10 h-10 rounded-full" src={item.avatar} alt={item.title}/>
                    <div className="text-refubookBlue">
                        <div>{item.userName}</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;
