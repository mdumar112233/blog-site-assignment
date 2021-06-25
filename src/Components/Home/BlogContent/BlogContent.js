import React from 'react';
import BlogContentDetails from '../BlogContentDetails/BlogContentDetails';
import home1 from '../../../Images/home1.jpg';
import './BlogContent.css';

const content = [
    {
        image : home1,
        title: 'Triangle Roof',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aut dolorum eos ...?'
    }
]

const BlogContent = () => {
    return (
        <div className='blog-content'>
            {
                content.map(content => <BlogContentDetails content={content}></BlogContentDetails>)
            }
        </div>
    );
};

export default BlogContent;