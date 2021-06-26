import React,  { useEffect, useState } from 'react';
import Sidebar from '../../Share/Sidebar/Sidebar';
import ManageBlogDetails from '../ManageBlogDetails/ManageBlogDetails';
import './ManageBlog.css';

const ManageBlog = () => {
    const [manageBlog, setManageBlog] = useState([]);
    console.log(manageBlog);

    useEffect(() => {
        fetch('http://localhost:5000/blogData')
        .then(res => res.json())
        .then(data => setManageBlog(data))
    },[])
    return (
        <div className='flex flex-row'>
            <div className="sidebar" style={{width: '235px'}}>
                <Sidebar></Sidebar>
            </div>
            <div className='manage-blog'>
                 <h3>Manage Blog</h3>
                <div className='blog-area  grid grid-flow-row grid-cols-3 grid-rows-6 gap-10'>
                    {
                        manageBlog.map(blog => <ManageBlogDetails blog={blog}></ManageBlogDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;