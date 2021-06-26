import React, { useEffect, useState } from 'react';
import BlogContentDetails from '../BlogContentDetails/BlogContentDetails';
import './BlogContent.css';


const BlogContent = () => {
    const [manageBlog, setManageBlog] = useState([]);
    console.log(manageBlog);

    useEffect(() => {
        fetch('https://glacial-thicket-40955.herokuapp.com/blogData')
        .then(res => res.json())
        .then(data => setManageBlog(data))
    },[])
    return (
       <div>
        <div className='blog-content'>
        <div>
            <div className='blog-title text-center'>
                <h1>Blog Content</h1>
                <div class=""></div>
            </div>               
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