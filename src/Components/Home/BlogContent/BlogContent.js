import React, { useEffect, useState } from 'react';
import BlogContentDetails from '../BlogContentDetails/BlogContentDetails';
// import home1 from '../../../Images/home1.jpg';
import './BlogContent.css';

// const content = [
//     {
//         image : home1,
//         title: 'Triangle Roof',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aut dolorum eos ...?'
//     }
// ]

const BlogContent = () => {
    const [manageBlog, setManageBlog] = useState([]);
    console.log(manageBlog);

    useEffect(() => {
        fetch('http://localhost:5000/blogData')
        .then(res => res.json())
        .then(data => setManageBlog(data))
    },[])
    return (
       <div>
        <div className='blog-content'>
        <div>
            <div className='text-center'>
                <h1>Blog Content</h1>
                <div class=""></div>
            </div>               
             <p class="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A fugiat in culpa aut hic omnis consequatur corrupti reprehenderit nesciunt debitis magnam aperiam numquam, perspiciatis ipsam, voluptatum pariatur exercitationem</p>
            </div>
            <div className='grid grid grid-flow-row grid-cols-4 grid-rows-1 gap-8'>
                {
                    manageBlog.map(content => <BlogContentDetails content={content}></BlogContentDetails>)
                }
            </div>
        </div>
       </div>
    );
};

export default BlogContent;