import React from 'react';
import addBlog from  '../../../Images/add.png';
import manageBlog from  '../../../Images/check-list.png';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar-container ml-7'>
            <h3>asentus</h3>
            <div className='mt-4 '>
                <div className='flex flex-row add-blog-img'>
                    <img src={addBlog} alt="" /> <Link to='/addBlog'>Add Blog</Link>
                </div>
                <div className='flex flex-row mt-3 manage-blog-img'>
                    <img src={manageBlog} alt="" /> <Link to='/manageBlog'>Manage Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;