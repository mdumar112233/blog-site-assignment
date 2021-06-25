import React from 'react';
import Sidebar from '../../Share/Sidebar/Sidebar';
import ManageBlogDetails from '../ManageBlogDetails/ManageBlogDetails';
import './ManageBlog.css';

const ManageBlog = () => {
    return (
        <div className='flex flex-row'>
            <div className="sidebar">
                <Sidebar></Sidebar>
            </div>
            <div className='manage-blog' style={{width: '100%'}}>
                 <h3>Manage Blog</h3>
                <div className='blog-area'>
                    <ManageBlogDetails></ManageBlogDetails>
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;