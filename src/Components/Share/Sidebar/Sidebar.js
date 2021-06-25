import React from 'react';
import addBlog from  '../../../Images/add.png';
import manageBlog from  '../../../Images/check-list.png';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar-container ml-7 mt-3'>
            <Link className='title' to='/'>asentus</Link>
            <div className='mt-8'>
                <div className='add-blog-img'>
                     <Link to='/addBlog' className='flex flex-row'> <img src={addBlog} alt="" /> <span>Add blog</span></Link>
                </div>
                <div className='mt-5 manage-blog-img'>
                     <Link to='/manageBlog' className='flex flex-row'> <img src={manageBlog} alt="" /> <span>Manage Blog</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;